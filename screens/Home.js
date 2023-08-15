import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/Title";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.homecontainer}>
        {/* image */}

        <Image
          source={{
            // uri: "https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?size=626&ext=jpg",
            uri: "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?size=626&ext=jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
        <Text style={styles.homeintrotext}>Explore the Knowledge Cosmos</Text>
      </View>
      <TouchableOpacity
        style={styles.btnstart}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.btntext}>Start </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
    marginRight: 20,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#ffff",
  },
  homecontainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  homeintrotext: {
    fontSize: 15,
    fontWeight: "500",
  },
  btnstart: {
    width: "90%",
    backgroundColor: "#33E4FF",
    padding: 12,
    alignItems: "center",
    borderRadius: 25,
    marginLeft: 15,
    marginBottom: 30,
  },
  btntext: {
    color: "black",
    fontSize: 25,
  },
});
