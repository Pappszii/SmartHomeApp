import React, { Component } from 'react';
import { View, Text,StyleSheet,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';


export default class AddListModal extends Component {
    backgroundColors=["#5CD859","#24A6D9","#595BD9","#8022D9","#D159D8","#D85963","#D88559"];

  state={
      name:"",
      color:this.backgroundColors[0]
  };

  createTodo =()=>{
      const {name,color} = this.state

     

      this.setState({name:""});
      this.props.closeModal();
  };

  renderColors(){
      return this.backgroundColors.map(color=>{
          return(
              <TouchableOpacity key={color} 
              style ={[styles.colorSelect,{backgroundColor:color}]} onPress={()=>this.setState({color})}/>
          )
      })
  };
  

  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={{position:"absolute", top:64,right:32}} onPress={this.props.closeModal} >
                <MaterialCommunityIcons name="close" size={24}/>
            </TouchableOpacity>
            <View style={{alignSelf:"stretch", marginHorizontal:32}}>
                <Text style={styles.title}>Create Todo List</Text>
                <TextInput style={styles.input} placeholder="List Name" 
                onChangeText={text=>this.setState({name:text})}>
             </TextInput>
             <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:16}}>
                 {this.renderColors()}
             </View>


                <TouchableOpacity style={[styles.create, {backgroundColor:this.state.color}]} onPress={this.createTodo}>
                    <Text style={{color:"#ffffff", fontWeight:"600"}}>Create!</Text>
                </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
    );
  }


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000000",
    alignSelf: "center",
    marginBottom: 16,
  },
  input:{
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:"#0000ff",
      borderRadius:6,
      height:50,
      marginTop:8,
      paddingHorizontal:16,
      fontSize:18
  },
  create:{
    marginTop:24,
    height:50,
    borderRadius:6,
    alignItems:"center",
    justifyContent: 'center',
  },
  colorSelect:{
      width:30,
      height:30,
      borderRadius:4
  }
});