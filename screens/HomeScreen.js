import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";


export default class HomeScreen extends React.Component {

    state={
        email:"",
        displayName:"",
        lists:[],
        user:{},
        loading:true
    }

    componentDidMount(){
       
        const{email,displayName} = firebase.auth().currentUser
     

        this.setState({email,displayName});
    };


    signOutUser=()=>{
        firebase.auth().signOut();
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greating}>Hi {this.state.email}!</Text>

        <TouchableOpacity style={{margintTop:32}} onPress={this.signOutUser}>
            <Text>Logout</Text>
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
    marginHorizontal: 30,
  },
});
