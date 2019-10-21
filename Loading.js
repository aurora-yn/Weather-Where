import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Loading() {
  return <View style={styles.loading}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.text}>Hi Weather Where</Text>
  </View>;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#c9f3f1"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 40
  }
})