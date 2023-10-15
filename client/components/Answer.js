import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyBubble from './MyBubble';

export default function Answer() {
  
    return (
      <View style={styles.container}>
        <MyBubble time="11111" ans="sdfdfdsfds" />
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
});