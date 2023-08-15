import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Navigation/index";

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingLeft: 10,
  },
});
