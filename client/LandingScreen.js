import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import Header from './components/Header';
import Prompt from './components/Prompt';
import Answer from './components/Answer';
import QuestionBox from "./components/QuestionBox";
import Modal from "react-native-modal";
import { FIREBASE_DB } from './FirebaseConfig';

export default function LandingScreen() {

  const [events, setEvents] = useState([]);
  const [overlay, setOverlay] = useState(true);
  
  const db = FIREBASE_DB;

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const eventsCollection = collection(db, 'events');
  //     const eventsSnapshot = await getDocs(eventsCollection);
  //     const eventsList = tolist(eventsSnapshot);
  //     setEvents(eventsList);
  //   }

  //   fetchEvents();
  // }, [db]);
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList = eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsList);
      console.log("EVENTSLIST ---->", eventsList);
    }

    fetchEvents();
  }, [db]);


  const toggleOverlay = (bool) => {
    setOverlay(bool);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Modal isVisible={overlay} backdropColor={"white"} backdropOpacity={0.96}>
        {/* Example QuestionBox, you might want to map over questions and render a QuestionBox for each */}
        <QuestionBox
          time="8:00PM"
          prompt="What made you smile today?"
          minute="12"
          ansCount="23"
          styles={styles.box}
          toggleOverlay={toggleOverlay}
        />
      </Modal>
      <ScrollView> 
        {/* Example Prompt, you might want to map over prompts and render a Prompt for each */}
        <Prompt question="What made you smile today?" answerCount="23" minute="12"/>
        {events.map((event, index) => <Answer key={index} event={event} />)}
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
