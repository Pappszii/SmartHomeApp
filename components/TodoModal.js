import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";



export default class TodoModal extends React.Component {
                 state = {
                   newTodo:""
                 };
                 renderTodo = (todo) => {
                   return (
                     <View style={styles.todoContainer}>
                       <TouchableOpacity>
                         <MaterialCommunityIcons
                           name={todo.completed ? "checksquare" : "crop-square"}
                           size={24}
                           style={{ width: 32 }}
                         />
                       </TouchableOpacity>

                       <Text style={[styles.todo,{textDecorationLine:todo.completed ?"line-through":"none"}]}>{todo.title}</Text>
                     </View>
                   );
                 };

                 render() {
                   const list = this.props.list;
                   return (
                     <KeyboardAvoidingView style={{flex:1}} behavior={"padding"}>
                     <SafeAreaView style={styles.container}>
                       <TouchableOpacity
                         style={{
                           position: "absolute",
                           top: 64,
                           right: 32,
                           zIndex: 10,
                         }}
                         onPress={this.props.closeModal}
                       >
                         <MaterialCommunityIcons name="close" size={24} />
                       </TouchableOpacity>
                       <View
                         style={[
                           styles.section,
                           styles.header,
                           { borderBottomColor: list.color },
                         ]}
                       >
                         <Text style={styles.title}>{list.name}</Text>
                         <Text style={{ color: "#808080" }}>2 of 4 tasks</Text>
                       </View>
                       <View style={[styles.section, { flex: 3 }]}>
                         <FlatList
                           data={list.todos}
                           renderItem={({ item }) => this.renderTodo(item)}
                           keyExtractor={(item) => item.title}
                           contentContainerStyle={{
                             paddingHorizontal: 32,
                             paddingVertical: 64,
                           }}
                           showsVerticalScrollIndicator={false}
                         ></FlatList>
                       </View>
                       <View
                         style={[styles.section, styles.footer]}
                         behavior="padding"
                       >
                         <TextInput
                           style={[
                             styles.input,
                             { borderColor: list.color },
                           ]}
                         />
                         <TouchableOpacity
                           style={[
                             styles.addTodo,
                             { backgroundColor: list.color },
                           ]}
                         >
                           <MaterialCommunityIcons
                             name="plus"
                             size={16}
                             color="#ffffff"
                           />
                         </TouchableOpacity>
                       </View>
                     </SafeAreaView>
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
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontWeight: "700",
    fontSize: 16,
    color: "#808080",
  },
});