import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Modal } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal"

const tempData = [
  {
    name: "Plan a Trip",
    color: "#24A6D9",
    todos: [
      {
        title: "Book Fight",
        completed: false,
      },
      {title:"fk off",
    completed:false}
    ],
  },
  {
    name: "Clean the house",
    color: "#8022D9",
    todos: [
      {
        title: "Clean",
        completed: false,
      },
    ],
  },
];

export default class MessageScreen extends React.Component {
  
  state ={
    addTodoVisible:false
  };
  
  
  toggleAddTodoModal(){
    this.setState({addTodoVisible:!this.state.addTodoVisible});
  }

  renderList = list=>{
    return<TodoList list={list}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={()=> this.toggleAddTodoModal()}>
          <AddListModal closeModal={()=>this.toggleAddTodoModal()}/>
        </Modal>


        <View style={{ flex: 1, paddingleft: 32 ,marginTop:16}}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          ></FlatList>
        </View>
        <View style={{ marginVertical: 32 }}>
          <TouchableOpacity onPress={()=> this.toggleAddTodoModal()}>
            <Text style={styles.addList}>+</Text>
            <Text>Add todo</Text>
          </TouchableOpacity>
        </View>
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
  addList: {
    borderWidth: 2,
    borderColor: "#19ddff",
    borderRadius: 4,
    padding: 16,
    color: "#19ddff",
    alignItems: "center",
    fontSize:16,
  },
});
