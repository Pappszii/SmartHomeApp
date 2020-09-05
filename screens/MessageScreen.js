import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Modal } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import Fire from "../Fire";


const tempData = [
  {
    name: "Plan a Trip",
    color: "#24A6D9",
    todos: [
      {
        title: "Book Fight",
        completed: true,
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
                 state = {
                   addTodoVisible: false,
                   lists: [],
                   user: {},
                 };

                 componentDidMount(){
                  fire = new Fire();
                  const user = firebase.auth().currentUser;
                  this.setState(user);
                  fire.getLists(lists=>{
                    this.setState({lists,user})
                  });
                 }

                 componentWillUnmount(){
                   this.refs.onSnapshot
                 }
                  

                 addList = (list) => {
                   this.setState({
                     lists: [
                       ...this.state.lists,
                       { ...list, id: this.state.lists.length + 1, todos: [] },
                     ],
                   });
                 };

                 updateList = list=>{
                   this.setState({lists:[...this.state.lists,{...list,id:this.state.lists.length+1,todos:[]}]})
                 }

                 toggleAddTodoModal() {
                   this.setState({
                     addTodoVisible: !this.state.addTodoVisible,
                   });
                 }

                 renderList = (list) => {
                   return <TodoList list={list} updateList={this.updateList} />;
                 };

                 updateList = lists => {
                   this.setState({
                     lists:this.state.lists.map(item=>{
                       return item.id===list.id?list:item;
                     })
                   })
                 };

                 render() {
                   return (
                     <View style={styles.container}>
                       <Modal
                         animationType="slide"
                         visible={this.state.addTodoVisible}
                         onRequestClose={() => this.toggleAddTodoModal()}
                       >
                         <AddListModal
                           closeModal={() => this.toggleAddTodoModal()}
                           addList={this.addList}
                         />
                       </Modal>

                       <View
                         style={{ flex: 1, paddingleft: 32, marginTop: 16 }}
                       >
                         <FlatList
                           data={this.state.lists}
                           keyExtractor={(item) => item.name}
                           horizontal={false}
                           showsVerticalScrollIndicator={false}
                           renderItem={({ item }) => <TodoList list={item} />}
                         ></FlatList>
                       </View>
                       <View style={{ marginVertical: 32 }}>
                         <TouchableOpacity
                           onPress={() => this.toggleAddTodoModal()}
                           style={{ alignItems: "center" }}
                         >
                           <MaterialCommunityIcons
                             name="plus"
                             size={16}
                             sty
                             style={styles.addList}
                           />
                         </TouchableOpacity>
                         <Text>Add todo</Text>
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
