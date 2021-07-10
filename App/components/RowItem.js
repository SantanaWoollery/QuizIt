import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, } from 'react-native-elements';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  },
  icon:  {
    flexGrow: 1, 
    justifyContent:"center", 
    alignItems: "center"

  }
});

export const RowItem = ({ onPress = () => { }, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Icon
        name='plus'
        type='evilicon'
        color='#fff'
      />

      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
