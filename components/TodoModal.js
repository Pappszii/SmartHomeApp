import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class TodoModal extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

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
            <View>
              <Text>List Modal</Text>
            </View>
          </Modal>
        </View>

        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
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
