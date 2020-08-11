import React from "react";
import { view, Text, StyleSheet } from "react-native";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <view style={styles.container}>
        <text style={styles.greating}>{"Hello again.\n Welcome back."}</text>

        <view style={styles.errorMessage}>
          <text>Error</text>
        </view>

        <view style={styles.form}>
          <text style={styles.inputTitle}>Email Address</text>
          <TextInput style={styles.input} autoCapitalize="none"></TextInput>
        </view>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 30,
  },
});
