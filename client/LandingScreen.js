import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Prompt from './components/Prompt';
import Answer from './components/Answer';
import QuestionBox from "./components/QuestionBox";
import { useState } from "react";
import Modal from "react-native-modal";


export default function LandingScreen() {

  const question = "What made you smile today?";
  const ansCount = "23";
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
          ansCount={ansCount}
          styles={styles.box}
          toggleOverlay = {this.toggleOverlay}
        />
      </Modal>
      {/* <Button title="Back to Login" onPress={() => useNavigation.navigate('Login')}/> */}
      <ScrollView> 
        <Prompt question={question} answerCount={ansCount} minute={minute}/>
        <Answer />
        <View style={styles.footer}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    backgroundColor: 'white'
  },

  footer:{
    height:200,
    backgroundColor: 'white'
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
