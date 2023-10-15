import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyBubble(props) {
    const { time, ans } = props;

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
    marginBottom: 40
  },

  myBubbleText: {
    color:'white'
  },

  myBubble: {
    width: 280,
    padding: 16,
    color:'white',
    backgroundColor: '#FFC501',
    borderRadius: 18,
    borderBottomRightRadius: 0,
    marginTop: 10
  },

  time: {
    fontSize: 11,
    color: '#888888'
  },

  myBubbleContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    left: 30
  }
});