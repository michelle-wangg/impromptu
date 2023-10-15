import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    const date = new Date();

    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Impromptu</Text>
        <Text style={styles.date}>{month} / {day} / {year} </Text>
      </View>
    );
};

// export default Header;
  
const styles = StyleSheet.create({
    logo: {
        color: '#ED3952',
        fontSize: 20
    },

    date: {
        color: '#ED3952'
    },

    container: {
        paddingTop: 80,
        paddingLeft: 50
    },
});