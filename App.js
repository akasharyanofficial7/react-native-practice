import React from "react";
import { View, Image, StyleSheet, ImageBackground, Text } from "react-native";

const logo = require("./assets/adaptive-icon.png");

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{ width: 300, height: 200, padding: 20, margin: 20 }}
      />
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/mom-spending-time-with-kid-beach_23-2150924964.jpg?size=626&ext=jpg&ga=GA1.1.1139437995.1723613942",
        }}
        style={{ width: 300, height: 300, padding: 20, margin: 20 }}
      />

      <ImageBackground source={logo} style={{ width: 100, height: 100 }}>
        <Text style={styles.text}> this is image background</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8e44ad",
    flex: 1,
  },
  text: {
    color: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
});
