import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

export default function ChooseKigali() {
  const menuOptions = ["Appetizer", "Starter", "Main", "Dessert", "Drink"];
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.headerText}>Choose Kigali</Text>
      <View style={styles.topLayer}>
        <View style={styles.topLayerItem}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/chooseKigali/icon1.png")}
              style={styles.topLayerImage}
            ></Image>
            <Text style={styles.imageText}>N8</Text>
          </View>
          <Text style={[styles.topLayerText, { fontWeight: "900" }]}>
            Ordered
          </Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.topLayerItem}>
          <Image
            source={require("../../assets/chooseKigali/icon2.png")}
            style={styles.topLayerImage}
          ></Image>
          <Text style={styles.topLayerText}>Call Waiter</Text>
        </View>
      </View>
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
  topLayer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 60,
    width: (width * 80) / 100,
  },
  topLayerItem: {
    height: 80,
  },
  topLayerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  topLayerImage: {
    height: 50,
    resizeMode: "contain",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageText: {
    color: "#fff",
    fontSize: 25,
    marginLeft: 10,
  },
  headerText: {
    color: "#F7941D",
    fontWeight: "900",
    fontSize: 25,
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
  verticalLine: {
    width: 2,
    backgroundColor: "rgb(102,62,12)",
  },
});
