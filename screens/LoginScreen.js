import React from "react"
import {view,Text,StyleSheet} from "react-native"


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <text style={styles.greeting}>{'Hello again.\n Welcome back.'}</text>

                <View style={styles.errorMessage}>
                    <text>Error</text>
                </View>

                <View style={styles.form}>
                    <text style ={styles.inputTitle}>Email Address</text>
                    <TextInput style ={styles.input} autoCapitalize="none"></TextInput>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    }
});