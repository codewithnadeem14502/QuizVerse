import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>QuizVerse</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    // backgroundColor: "#FFC300",
    borderRadius: 50,
  },
  titleText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "400",
    marginRight: 20,
    color: "black",
  },
});
