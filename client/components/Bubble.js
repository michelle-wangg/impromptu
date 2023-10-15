import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default function Bubble(props) {
    const { time, ans, username, commentsCount, imgDir } = props;
    // const imagePath = require(`../assets/${imgDir}`); 

    return (
      <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.bubbleContainer}>
            {/* {imgDir ?  */}
                {/* <Image source={imagePath} style={styles.bubbleImg}/> :  */}
                <View style={styles.bubbleComment}>
                <Image
                    source={require('../assets/icon-streak.png')} 
                    style={styles.iconImage}
                />
                <View style={styles.verticalContainer}>
                    <View style={styles.horizontalContainer}>
                        <View style={styles.myBubble}>
                            <Text style={styles.myBubbleText}>{ans}</Text>
                        </View>
                        <Text style={styles.commentsCount}>{commentsCount}</Text>
                        <Image
                            source={require('../assets/comment-icon.png')} 
                            style={styles.commentImage}
                        />
                    </View>
                    <Text style={styles.username}>{username}</Text>
                </View>
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
    marginTop: 10,
    marginLeft: 8
  },

  time: {
    fontSize: 11,
    color: '#888888'
  },

  bubbleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: 350
  },

  commentImage: {
    width: 19,
    height: 15,
    marginLeft: 0,
    marginBottom: 12
  },

  iconImage: {
    width: 33,
    height: 34,
  },

  bubbleComment: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  verticalContainer: {
    display:'flex',
    flexDirection: 'column' 
  },

  horizontalContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  username: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 8,
    marginTop: 4
  },

  commentsCount: {
    color: '#175EFA',
    fontSize: 12,
    paddingLeft: 4
  },
  bubbleImg: {
    width: 236,
    height: 133,
    borderRadius: 10
  }

});