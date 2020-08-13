import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from 'firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './screens/MessageScreen';
import { NavigationContainer } from '@react-navigation/native';





const firebaseConfig = {
  apiKey: "AIzaSyDxSabF6P28eIKsVG2FK6BBalWuyZG32vA",
  authDomain: "smarthomeapp-5b932.firebaseapp.com",
  databaseURL: "https://smarthomeapp-5b932.firebaseio.com",
  projectId: "smarthomeapp-5b932",
  storageBucket: "smarthomeapp-5b932.appspot.com",
  messagingSenderId: "873118681004",
  appId: "1:873118681004:web:0a1b70457e8c7f6a489c09"
};


firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeTabs,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default createAppContainer(
  createSwitchNavigator(
    {
    Loading:LoadingScreen,
    App:AppStack,
    Auth:AuthStack
  },
  {
    initialRouteName:"Loading"
  }
  )
)



