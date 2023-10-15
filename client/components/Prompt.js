import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Prompt(props) {
  return (
    <View>
      <Text style={styles.qLetter}>Q.</Text>
      <Text style={styles.qHeader}>{props.question}</Text>
      <View style={styles.horizontalDiv}>
        <Text style={styles.itemStyle}>{props.answerCount} answers</Text>
        <Text style={styles.itemStyle}>•</Text>
        <Text style={styles.itemStyle}>{props.minute} minutes</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.line}></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qLetter: {
    color: "#ED3952",
    fontSize: 26,
    textAlign: "center",
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20
  },
  qHeader: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    maxWidth: 280,
    alignSelf: 'center'
  },
  horizontalDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  itemStyle: {
    fontSize: 10,
    margin: 10,
    opacity: 0.5,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
});
