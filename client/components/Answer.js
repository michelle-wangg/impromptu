import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';
import Bubble from './Bubble';

export default function Answer({ event, currentUser }) {
    const userDict = {
      "joa@gmail.com" : "joalee2002",
      "liaz@gmail.com" : "linnaz123",
      "isaac@gmail.com" : "izhu1115",
      "m@gmail.com" : "mishw",
      "gloria@gmail.com" : "gf222",
      "eric@gmail.com" : "elee"
    }
    console.log('CURR USER IN ANS----->', currentUser);
    
    let currUserBubble = [];
    let friendsBubble = [];

    event["ans"].forEach((answer, index) => {
        const ansText = String(answer["ans"]);
        console.log("ANSTEXTTTSTTTTTTTTTT---->", ansText);
        const timeText = String(answer["time"]);
        const usernameText = String(answer["username"]);
        const commentsCountText = String(answer["commentsCount"]);
        // const emailText = String(answer["emailText"]);

        console.log("CURRENTEXTTTSTTTTTTTTTT---->", currentUser);

        if(userDict[currentUser] === usernameText) {
            currUserBubble.push(
                <MyBubble 
                    key={index}
                    time={timeText}
                    ans={ansText}
                    username={usernameText}
                    commentsCount={commentsCountText}
                />
            );
        } else {
            friendsBubble.push(
                <Bubble 
                    key={index}
                    time={timeText}
                    ans={ansText}
                    username={usernameText}
                    commentsCount={commentsCountText}
                />
            );
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.aLetter}>A.</Text>
            {currUserBubble}  
            {friendsBubble}
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