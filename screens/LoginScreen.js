import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin=() =>{
      const{email,password} = this.state

      firebase.auth().signInWithEmailAndPassword(email,password).catch(error=> this.setState({errorMessage:error.message}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>{"Hello again.\n Welcome back."}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              secureTextEntry
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Register")}>
          <Text style={{ color: "#414959", fontSize: 13 }}>
            New to SmartHomeApp?{" "}
            <Text style={{ color: "#E9446A" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
    marginHorizontal: 33,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 18,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 30,
    fontSize: 15,
    color: "rgb(138,143,158)",
    alignSelf: "stretch",
    textAlignVertical: "top",
  },
  button: {
    marginHorizontal: 40,
    marginTop: 32,
    backgroundColor: "#E9446A",
    borderRadius: 3,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
});
