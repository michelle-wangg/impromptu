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
  toggleOverlay = (bool) => {
    setOverlay(bool);
  };
  return (
    <View styles={styles.container}>
      <Header />
      <Modal isVisible={overlay} backdropColor={"white"} backdropOpacity={0.96}>
        <QuestionBox
          time={time}
          prompt={question}
          minute={minuteAgo}
          ansCount={ansCount}
          styles={styles.box}
          toggleOverlay = {this.toggleOverlay}
        />
      </Modal>
      <Prompt question={question} answerCount={ansCount} minute={minuteAgo} />
      <Answer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    position: "absolute",
    top: 0, // Adjust this value to move the box up
    left: "50%",
    transform: [{ translateX: -50 }], // Centers the box horizontally
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
