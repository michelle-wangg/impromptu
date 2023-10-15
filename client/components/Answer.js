import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';
import Bubble from './Bubble';

export default function Answer({ event }) {
    // for (const o of event["ans"]) {

    //   console.log("PRINT AND---->", o);
    // }

  return (
    <View style={styles.container}>
      <Text style={styles.aLetter}>A.</Text>
      
      {event["ans"].map((answer, index) => {
          const ansText = String(answer["ans"]);
          
          const timeText = String(answer["time"]);
          const usernameText = String(answer["username"]);
          const commentsCountText = String(answer["commentsCount"]);
          
          return index === 0 ? 
              <MyBubble 
                  key={index} 
                  time={timeText} 
                  ans={ansText}
                  username={usernameText}
                  commentsCount={commentsCountText}
              /> : 
              <Bubble 
                  key={index} 
                  time={timeText} 
                  ans={ansText}
                  username={usernameText}
                  commentsCount={commentsCountText}
              />
      })}
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
