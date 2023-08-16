import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [qnumber, setQnumber] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const getQuiz = async () => {
    setIsloading(true);
    const URL = "https://opentdb.com/api.php?amount=10&encode=url3986";
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data.results[0]);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsloading(false);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQnumber(qnumber + 1);
    setOptions(generateOptionsAndShuffle(questions[qnumber + 1]));
  };
  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    shuffleArray(options);

    return options;
  };
  const handlSelectedOption = (_option) => {
    if (_option === questions[qnumber].correct_answer) {
      setScore(score + 10);
    }
    if (qnumber !== 9) {
      setQnumber(qnumber + 1);
      setOptions(generateOptionsAndShuffle(questions[qnumber + 1]));
    }
    if (qnumber === 9) {
      handleShowResult();
    }
  };
  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {isloading ? (
        <View style={styles.loadingscreen}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg?size=626&ext=jpg",
            }}
            style={styles.banner}
            resizeMode="contain"
          />
          <Text style={styles.loadingtext}>LOADING...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parnet}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q{qnumber + 1}.{" "}
                {decodeURIComponent(questions[qnumber].question)}
              </Text>
            </View>

            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optnbtn}
                onPress={() => handlSelectedOption(options[0])}
              >
                <Text style={styles.optn}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optnbtn}
                onPress={() => handlSelectedOption(options[1])}
              >
                <Text style={styles.optn}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optnbtn}
                onPress={() => handlSelectedOption(options[2])}
              >
                <Text style={styles.optn}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optnbtn}
                onPress={() => handlSelectedOption(options[3])}
              >
                <Text style={styles.optn}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottombtn}>
              {qnumber !== 9 && (
                <TouchableOpacity style={styles.btn} onPress={handleNextPress}>
                  <Text style={styles.btntext}>SKIP</Text>
                </TouchableOpacity>
              )}
              {qnumber === 9 && (
                <TouchableOpacity style={styles.btn} onPress={handleShowResult}>
                  <Text style={styles.btntext}>SHOW RESULT</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  parnet: {
    height: "100%",
  },
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
  top: {
    marginVertical: 16,
  },
  question: {
    fontSize: 25,
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  optnbtn: {
    paddingVertical: 26,
    marginVertical: 10,
    backgroundColor: "#00afb9",
    borderRadius: 12,
  },
  optn: {
    fontSize: 20,
    // textAlign: "center",
    marginLeft: 10,
    fontWeight: "500",
  },

  bottombtn: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "#33E4FF",
    padding: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 10,
  },
  btntext: {
    color: "black",
    fontSize: 18,
  },
  loadingscreen: {
    marginTop: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingtext: {
    fontSize: 20,
    fontWeight: "600",
    color: "#F79807",
  },
});
