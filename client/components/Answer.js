import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';
import Bubble from './Bubble';

export default function Answer() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.aLetter}>A.</Text>
        <MyBubble time="8:02pm" ans="Got my regular latte at Stabucks and the lady drew a smiley face on my cup. AHhhhhhh" username="linnaz123" commentsCount="1"/>
        <Bubble time="8:45pm" ans="Had the best nap ever." username="joalee2002" commentsCount="3"/>
        <Bubble time="8:23pm" ans="I told myself I’ll do the dishes when I get back from class, but guess what. My best roommate did it for me and even made me cookies (‘:" username="izhu1115" commentsCount="8"/>
        {/* <Bubble time="8:20pm" imgDir="cookies.png" username="ericlee" commentsCount="2" /> */}
        <Bubble time="8:15pm" ans="None. Twas a very sad day. sigh." username="mishw" commentsCount="2" />
        <Bubble time="8:08pm" ans="WAHOOOOOOOO I AM SO HAPPYYYYYY WWWEEEEEEE" username="gloriaf222" commentsCount="1"/>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    aLetter: {
      fontSize: 25,
      fontWeight: '600',
      color: '#FFC501',
      marginTop: 12,
      marginBottom: 18
    }
});