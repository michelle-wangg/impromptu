import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FIREBASE_DB } from "client/FirebaseConfig.js";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
const db = FIREBASE_DB;
import moment from "moment";

export default function QuestionBox(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  onSubmit = () => {
    // Call the function passed as a prop from the parent
    props.toggleOverlay(false);
    // handlePrompt;
    handlePrompt({
      ans: text,
      commentsCount: 0,
      time: new Date(),
      username: "newUser123",
    });
  };

  const handlePrompt = async (newAnswer) => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((d) => {
        const jsDateObject = d.data().date;
        const formattedDate = moment(jsDateObject.toDate()).format(
          "YYYY-MM-DD"
        );
        const today = new Date();
        const formattedDate2 = moment(today).format("YYYY-MM-DD");
        const arr = d.data().ans;
        if (formattedDate == formattedDate2) {
          newAnswer.commentsCount = d.data().ans.length;
          // setCount(d.data().ans.length);
          // console.log(d.data().ans.length);
          const docRef = doc(db, "events", d.id);

          // Update the 'ans' array with the new answer
          updateDoc(docRef, {
            ans: arrayUnion(newAnswer),
          });
        }
      });
    } catch (error) {
      console.error("Error setting document:", error);
    }
  };

  return (
    <View>
      {/* <Text style={styles.qLetter}>Q.</Text> */}

      <View style={styles.container}>
        <Text style={styles.qLetter}>Q.</Text>
        <Text style={styles.time}>{props.time}</Text>
        {/* <View style={styles.container}> */}
        <View style={styles.box}>
          <Text style={styles.questionMark}>?</Text>
          <View style={(styles.width = "10%")}>
            <Text style={styles.prompt}>{props.prompt}</Text>

            <View style={styles.horizontalDiv}>
              <Text style={styles.itemStyle}>{props.ansCount} answers</Text>
              <Text style={styles.itemStyle}>•</Text>
              <Text style={styles.itemStyle}>{props.minute} minutes ago</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="   Write your answer"
              onSubmitEditing={onSubmit}
              onChangeText={(value) => setText({ value })}
            ></TextInput>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}

// export default Header;

const styles = StyleSheet.create({
  qLetter: {
    color: "#ED3952",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "500",
    paddingBottom: 80,
    marginTop: 90,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 250,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 262,
    height: 269,
    backgroundColor: "#ED3952",
    borderRadius: 20,
  },
  time: {
    color: "#ED3952",
    fontWeight: "500",
    opacity: 0.6,
    paddingBottom: 25,
  },
  padding: {
    display: "flex",
    flexDirection: "column",
  },
  questionMark: {
    color: "white",
    fontSize: 30,
    paddingBottom: 20,
  },
  prompt: {
    color: "white",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: -15,
  },
  horizontalDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  itemStyle: {
    fontSize: 12,
    color: "white",
    margin: 2,
    opacity: 0.5,
    fontWeight: "400",
    paddingTop: 60,
  },
  input: {
    height: 40,
    width: "150",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 12,
    paddingLeft: 20,
  },
});
