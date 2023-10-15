import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Prompt from './components/Prompt';
import Answer from './components/Answer';

export default function App() {
  return (
    <View styles={styles.container}>
      <Header />
      <Prompt />
      <Answer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
  },

});
