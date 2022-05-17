import React from "react";
import { StyleSheet, Text, View, TextInput,Icon } from "react-native";
// import { SearchBar } from 'react-native-elements';

export default function SearchPage(props) {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search for your preferred restaurant"
        value={text}
      />
      <View style={styles.desc}>
        <Text style={styles.middleText}>or</Text>

        <Text style={styles.bottomText}>Scan , Pay & Enjoy!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F7941D",
    alignItems: "center",
    display: "flex",
  },
  input: {
    height: 40,
    marginTop: 100,
    borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  searchIcon: {
    padding: 10,
  },
  desc: {
    justifyContent: "center",
    alignItems: "center",
  },
  middleText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#171717",
    fontSize: 30,
  },
  bottomText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
});
