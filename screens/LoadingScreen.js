import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";



export default class LoadingScreen extends React.Component {
                

                 render() {
                   return (
                     <View style={styles.container}>
                       <Text style={styles.greeting}>Loading...</Text>
                       <ActivityIndicator size="large"></ActivityIndicator>
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
  
});