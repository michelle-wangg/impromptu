import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import Answer from "./components/Answer";
import QuestionBox from "./components/QuestionBox";
import { useState } from "react";
import Modal from "react-native-modal";

export default function App() {
  const question = "What made you smile today?";
  const ansCount = "23";
  const minuteAgo = "12";
  const time = "8:00PM";
  const [overlay, setOverlay] = useState(true);
  const toggleOverlay = () => {
    setModalVisible(false);
  };
  return (
    <View styles={styles.container} blurRadius={overlay? 100 : 0}>
      <Header />
      <Prompt question = {question} answerCount={ansCount} minute={minuteAgo}/>
      <Answer />
      <Modal isVisible={overlay} backdropColor= {"white"} backdropOpacity={0.6}>
        <QuestionBox
          time={time}
          prompt={question}
          minute={minuteAgo}
          ansCount={ansCount}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  modalView: {
    width:"100%",
    position:"absolute",
    bottom:0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
     
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  });
