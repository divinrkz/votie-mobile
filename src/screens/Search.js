import React from "react";
import { StyleSheet, Text, View, TextInput, Icon, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import Colors from "../../util/colors";
export default function SearchScreen(props) {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.input}
        onChangeText={onChangeText}
        round
   
        iconColor={Colors.default}
        leftIconContainerStyle={{ color: Colors.default, fontSize: 100 }}
        inputContainerStyle={{ backgroundColor: "#FFFFFF" }}
        containerStyle={{ backgroundColor: Colors.default, border: 0 }}
        inputStyle={{ backgroundColor: "#FFFFFF" }}
        placeholder="Search for your preferred restaurant"
        value={text}
      />
      <View style={styles.desc}>
        <Text style={styles.middleText}>or</Text>
        <Image
          source={require("../../assets/qr-code.png")}
          style={styles.img}
        />
        <Text style={styles.bottomText}>Scan , Pay & Enjoy!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.default,
    alignItems: "center",
    // display: "flex",
    paddingTop: 100,
  },
  input: {
    width: 300,
  },
  desc: {
    justifyContent: "center",
    alignItems: "center",
  },
  middleText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    paddingTop:10,
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
  img: {
    marginTop: 60,
    width: 150,
    height: 150,
  },
});
