import React from "react"
import {StyleSheet,Text,View,Alert,TextInput,TouchableOpacity} from "react-native";
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {
   state ={
    email:"",
    password="",
    errorMessage:null
     }
   
   
   
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.greeting}>
              {"Hello again.\n Welcome back."}
            </Text>

            <View style={styles.errorMessage}>
              <Text>Error</Text>
            </View>

            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                ></TextInput>
              </View>

              <View style={{ marginTop: 32 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  secureTextEntry
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
              <Text style={{ color: "#414959", fontSize: 13 }}>
                  New to SmartHomeApp? <Text style={{color:"#E9446A"}}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
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
  button:{
      marginHorizontal:30,
      backgroundColor:'#E9446A',
      borderRadius:4,
      height:52,
      alignItems:"center",
      justifyContent:"center"
  }
});