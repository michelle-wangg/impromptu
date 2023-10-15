import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'U' && password === 'P') {
      navigation.navigate('Landing');
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.logo}>Im<Text style={styles.boldText}>prompt</Text>u</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.loginButton} title="Login" onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  input: {
    width: 250,
    borderRadius: 8,
    margin: 10,
    padding: 8,
    paddingLeft: 10,
    backgroundColor: '#E9E9E9'
  },

  logo: {
    color: '#ED3952',
    fontSize: 24,
    marginBottom: 14,
    marginTop:300
  },

  boldText: {
      fontWeight: '600'
  },

  loginButton: {
    width: 150,
    backgroundColor: '#ED3952',
    borderRadius: 18,
    padding: 10,
    marginTop: 15,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: '500'
  }

});

