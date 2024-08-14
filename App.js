import { View, Text, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi this is react native</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 80,
  },
  text: {
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
});
