import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

export default function MenuSelector() {
  const menuOptions = ["Appetizer", "Starter", "Main", "Dessert", "Drink"];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choose Kigali</Text>
      <View>
        <Text style={styles.subHeaderText}>menu</Text>
        <View style={styles.options}>
          {menuOptions.map((opt) => {
            return (
              <View key={opt} style={styles.menuListItem}>
                <Text style={styles.menuListItemText}>{opt}</Text>
                <Icon name="angle-right" size={30} color="#fff" />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(0,0,0)",
    height,
    width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#F7941D",
    fontWeight: "900",
    fontSize: 34,
    textAlign: "center",
  },
  subHeaderText: {
    color: "#F7941D",
    fontWeight: "900",
    fontSize: 26,
    textAlign: "center",
  },
  menuListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: (width * 60) / 100,
  },
  menuListItemText: {
    color: "#ffffff",
    fontSize: 20,
  },
  options: {
    marginTop: 20,
  },
});
