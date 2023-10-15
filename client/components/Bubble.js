import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bubble(props) {
    const { time, ans} = props;

    return (
      <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.myBubbleContainer}>
          <View style={styles.myBubble}>
            <Text style={styles.myBubbleText}>{ans}</Text>
          </View>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },

  myBubbleText: {
    color:'white'
  },

  myBubble: {
    width: 280,
    padding: 16,
    color:'white',
    backgroundColor: '#175EFA',
    borderRadius: 18,
    borderBottomLeftRadius: 0,
    marginTop: 10
  },

  time: {
    fontSize: 11,
    color: '#888888'
  },

  myBubbleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    right: 30
  }
});