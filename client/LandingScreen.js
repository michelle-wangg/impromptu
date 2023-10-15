import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Header from './components/Header';
import Prompt from './components/Prompt';
import Answer from './components/Answer';
import { useNavigation } from '@react-navigation/native';


export default function LandingScreen() {

  const question = "What made you smile today?";
  const ansCount = "23";
  const minute = "12";
  return (
    <View style={styles.container}>
      <Header />
      {/* <Button title="Back to Login" onPress={() => useNavigation.navigate('Login')}/> */}
      <ScrollView> 
        <Prompt question={question} answerCount={ansCount} minute={minute}/>
        <Answer />
        <View style={styles.footer}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    backgroundColor: 'white'
  },

  footer:{
    height:200,
    backgroundColor: 'white'
  }

});
