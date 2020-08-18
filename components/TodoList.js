import React from "react";
import {StyleSheet,Text,View, Modal} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TodoModal from"../components/TodoModal"



export default class TodoList extends React.Component {

state={
  showListVisible:false
};

toggleListModal(){
  this.setState({showListVisible:!this.state.showListVisible})
};

 render() {

const list = this.props.list;
  return (
    <View>
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => state.toggleListModal()}
        >
         <TodoModal list={list} closeModal={()=>this.toggleListModal()}></TodoModal>
        </Modal>
      </View>

      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]} onPress={()=>this.toggleListModal()}
      >
        <Text numberOfLines={1} style={styles.listTitle}>
          {list.name}
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text>{}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
  }





const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: "center",

    width: 250,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 18,
  },
});
