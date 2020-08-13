import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";


export default class MessageScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Ez a Messagescreen...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 33,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 18,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "rgb(138,143,158)",
  },
});
