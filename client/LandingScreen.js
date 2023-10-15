import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import Answer from "./components/Answer";
import QuestionBox from "./components/QuestionBox";
import { useState } from "react";
import Modal from "react-native-modal";
import moment from "moment";

import { FIREBASE_DB } from "./FirebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
const db = FIREBASE_DB;

export default function LandingScreen() {
  const [question, setQuestion] = useState("");
  const [count, setCount] = useState(0);

  const handleGetPrompt = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        const jsDateObject = doc.data().date;
        const formattedDate = moment(jsDateObject.toDate()).format(
          "YYYY-MM-DD"
        );
        const today = new Date();
        const formattedDate2 = moment(today).format("YYYY-MM-DD");
        if (formattedDate == formattedDate2) {
          setQuestion(doc.data().prompt);
          // console.log(doc.data().prompt);
        }
      });
    } catch (error) {
      console.log("No such document for prompt!");
      alert("Couldnt fetch prompt");
    }
  };

  const handleGetAnswerCount = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const listField = data.ans;
        setCount(count + listField.length);
        // console.print(doc.data());
        // setCount(count);
      });
    } catch (error) {
      console.log("No such document!");
      alert("Couldnt fetch prompt");
    }
  };
  useEffect(() => {
    handleGetPrompt();
    handleGetAnswerCount();
  }, []);
  const minute = "12";
  const time = "8:00PM";
  const [overlay, setOverlay] = useState(true);
  toggleOverlay = (bool) => {
    setOverlay(bool);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Modal isVisible={overlay} backdropColor={"white"} backdropOpacity={0.96}>
        <QuestionBox
          time={time}
          prompt={question}
          minute={minute}
          ansCount={count}
          styles={styles.box}
          toggleOverlay={this.toggleOverlay}
        />
      </Modal>
      {/* <Button title="Back to Login" onPress={() => useNavigation.navigate('Login')}/> */}
      <ScrollView>
        <Prompt question={question} answerCount={count} minute={minute} />
        <Answer />
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },

  footer: {
    height: 200,
    backgroundColor: "white",
  },

  box: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }],
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  modalView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  box: {
    position: "absolute",
    top: 10,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
