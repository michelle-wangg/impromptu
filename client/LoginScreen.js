import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      
    } catch (error) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    }
};

const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Logged in successfully');
      navigation.navigate('Landing');
    } catch (error) {
      console.log(error);
      alert('Login failed: ' + error.message);
    }
};

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Im<Text style={styles.boldText}>prompt</Text>u</Text>
       <TextInput
         placeholder="Emai"
         value={email}
         onChangeText={setEmail}
         style={styles.input}
       />
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         secureTextEntry
         style={styles.input}
       />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
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

});

