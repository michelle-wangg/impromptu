import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
    const date = new Date();

    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.logo}>Im<Text style={styles.boldText}>prompt</Text>u</Text>
            <Text style={styles.date}>{month} / {day} / {year} </Text>
        </View>
        <Image
            source={require('../assets/user-streak.png')} 
            style={styles.userImage}
        />
      </View>
    );
};

// export default Header;
  
const styles = StyleSheet.create({
    logo: {
        color: '#ED3952',
        fontSize: 20,
        marginBottom: 4,
    },

    date: {
        color: '#ED3952',
        fontSize: 12,
        paddingBottom: 30
    },

    container: {
        paddingTop: 80,
        paddingLeft: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350
    },

    boldText: {
        fontWeight: '600'
    },

    userImage: {
        width: 63,
        height: 34
    }
});