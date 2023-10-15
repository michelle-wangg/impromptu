import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Bubble(props) {
    const { time, ans} = props;

    return (
      <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.bubbleContainer}>
            <View style={styles.bubbleComment}>
                <View style={styles.myBubble}>
                    <Text style={styles.myBubbleText}>{ans}</Text>
                </View>
                <Image
                source={require('../assets/comment-icon.png')} 
                style={styles.commentImage}
                />
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
    marginBottom: 15
  },

  myBubbleText: {
    color:'white'
  },

  myBubble: {
    maxWidth: 280,
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

  bubbleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: 300
  },

  commentImage: {
    width: 19,
    height: 15,
    marginLeft: 8
  },

  bubbleComment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  }
});