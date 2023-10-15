import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyBubble(props) {
    const { time, ans} = props;

    return (
      <View>
        <Text>{time}</Text>
        <Text>{ans}</Text>
      </View>
    );
};
  
const styles = StyleSheet.create({

});