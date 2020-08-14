import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TodoList from "../components/TodoList";

const tempData = [
  {
    name: "Plan a Trip",
    color: "#24A6D9",
    todos: [
      {
        title: "Book Fight",
        completed: false,
      },
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
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginVertical:32}}>
          <TouchableOpacity>
             <Text style={styles.addList}>+</Text>
             <Text>Add todo</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex:1, paddingleft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          ></FlatList>
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
    fontSize:16
  },
});
