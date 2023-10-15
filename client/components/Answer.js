import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';
import Bubble from './Bubble';

export default function Answer({ event }) {
  // Check if the fields and ans properties exist
  if (!event.fields || !event.fields.ans || !event.fields.ans.arrayValue || !event.fields.ans.arrayValue.values) {
    console.log("NO DATAAAAAA", event);
    return null;  // or you can render a loading spinner or some placeholder content
    
  }
  console.log("EVENTTTT", event);

  return (
    <View style={styles.container}>
      <Text style={styles.aLetter}>A.</Text>
      
      {event.fields.ans.arrayValue.values.map((answer, index) => {
          const { username, commentsCount, time, ans } = answer.mapValue.fields; 
          const ansText = ans.stringValue;
          const timeText = time.stringValue;
          const usernameText = username.stringValue;
          const commentsCountText = commentsCount.stringValue;
          console.log("ANSTEXT---->", ansText);
          console.log("TIMETEXT---->", timeText);
          
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
// ... (rest of the code remains the same)
