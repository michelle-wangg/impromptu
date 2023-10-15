import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';
import Bubble from './Bubble';

export default function Answer() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.aHeader}>A.</Text>
        <MyBubble time="8:02pm" ans="Got my regular latte at Stabucks and the lady drew a smiley face on my cup. AHhhhhhh" />
        <Bubble time="8:45pm" ans="Had the best nap ever." />
        <Bubble time="8:23pm" ans="I told myself I’ll do the dishes when I get back from class, but guess what. My best roommate did it for me and even made me cookies (‘:" />
        <Bubble time="8:15pm" ans="None. Twas a very sad day. sigh." />
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    aHeader: {
      fontSize: 25,
      fontWeight: '600',
      color: '#FFC501',
      marginTop: 20,
      marginBottom: 16
    }
});