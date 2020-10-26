import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Modal } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TodoList from "../components/TodoList";
import AddListModal from "../components/AddListModal"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";
import getLists from "../Fire";
import Fire from "../Fire";

export default class MessageScreen extends React.Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
  };

  updateList = (list) => {
    firebase.updateList(list)
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    this.setState(user);
    Fire.getLists((lists) => {
      this.setState({ lists, user });
    });
  }

  componentWillUnmount() {
    this.onSnapshot;
  }

  

  //updateList = (list) => {
   // this.setState({
   //   lists: [
    //    ...this.state.lists,
    //    { ...list, id: this.state.lists.length + 1, todos: [] },
   //   ],
   // });
  //};

  toggleAddTodoModal() {
    this.setState({
      addTodoVisible: !this.state.addTodoVisible,
    });
  }

  renderList = (list) => {
    return <TodoList list={list} updateList={this.updateList} />;
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
            addList={Fire.addList}
          />
        </Modal>

        <View style={{ flex: 1, paddingleft: 32, marginTop: 16 }}>
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
