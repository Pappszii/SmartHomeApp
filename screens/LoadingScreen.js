import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>Loading...ZSAMO</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    }
});