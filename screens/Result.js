import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  const resultImage =
    score >= 40
      ? "https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg?size=626&ext=jpg"
      : "https://img.freepik.com/free-vector/student-stress-concept-illustration_114360-9550.jpg?size=626&ext=jpg";
  return (
    <View style={styles.rescontainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>RESULT</Text>
      </View>

      <View style={styles.homecontainer}>
        {/* image */}

        <Image
          source={{
            uri: resultImage,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
        {score >= 40 ? (
          <View style={styles.scorecontainer}>
            <Text style={styles.scoretext}> Your score is ({score} / 100)</Text>
          </View>
        ) : (
          <View style={styles.scorefailure}>
            <Text style={styles.scoretext}> Your score is ({score} / 100)</Text>
          </View>
        )}
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          style={styles.btnstart}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btntext}> Go to Home </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#FFC300",
    borderRadius: 50,
    marginBottom: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "400",
    marginRight: 20,
    color: "black",
  },
  banner: {
    width: "900%",
    height: 350,
    marginRight: 20,
    borderRadius: 50,
  },
  rescontainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#ffff",
  },
  homecontainer: {
    // marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btnstart: {
    // marginTop: 120,
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
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  scorecontainer: {
    width: "100%",
    backgroundColor: "#80ed99",
    padding: 15,
    borderRadius: 5,
  },
  scorefailure: {
    width: "100%",
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
  },

  scoretext: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    marginRight: 10,
  },
});
