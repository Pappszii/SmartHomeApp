import React from "react";
import {StyleSheet,Text,View} from "react-native";




const TodoList = ({list}) =>{
    return (
      <View style={[styles.listContainer, { backgroundColor: list.color }]}>
        <Text numberOfLines={1} style={styles.listTitle}>
            {list.name}
        </Text>
      </View>
    );
};

export default TodoList;

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
