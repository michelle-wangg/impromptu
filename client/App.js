import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Prompt from './components/Prompt';
import Answer from './components/Answer';

export default function App() {
  const question = "What made you smile today?";
  const ansCount = "23";
  const minute = "12";
  return (
    <View styles={styles.container}>
      <Header />
      <Prompt question = {question} answerCount={ansCount} minute={minute}/>
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
