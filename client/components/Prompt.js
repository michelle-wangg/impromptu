import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Prompt() {
  
    return (
      <View>
        <Text style={styles.qHeader}>Today's Question</Text>
      </View>
    );
};
  
const styles = StyleSheet.create({
    qHeader: {
        color: '#ED3952',
        fontSize: 15
    },
});