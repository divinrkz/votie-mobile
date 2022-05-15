import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { Dimensions } from "react-native-web";
import { Rating } from 'react-native-ratings';
import Icon from "react-native-vector-icons/FontAwesome";

export default function PaymentSuccess() {
  return (
    <View style={styles.container}>
      <View style={[styles.mb]}>
        <Image source={require('../../assets/transaction-success.png')} style={styles.icon} />
      </View>
      <View style={[styles.mb, { marginTop: -40 }]}>
        <Text style={styles.centered}>
          Payment success Yayy! {"\n"}
        </Text>
        <Text style={[styles.centered, { marginTop: 20, fontWeight: "normal", color: "#ffff" }]}>
          we will send you order details and invoice in {"\n"}
          your contact no. and registered email
        </Text>
      </View>
      <View style={[styles.mb, { display: "flex", flexDirection: "row", justifyContent: "center" }]}>
        <Text style={{ color: "#C3744D", marginRight: 12 }}>
          Check Details
        </Text>
        <Icon name="arrow-right" size={20} color="#C3744D" />
      </View>
      <View style={styles.mb}>
        <TouchableOpacity title="sign in" style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.mb]}>
        <Image source={require('../../assets/yellow-logo.svg')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: Dimensions.get("window").width,
    padding: "15%",
    paddingTop: "5%",
    height: Dimensions.get("window").height,
  },
  centered: {
    textAlign: "center",
    color: "#F7941D",
    fontWeight: "bold",
  },
  mb: {
    marginBottom: "5%",
  },
  image: {
    width: 331,
    height: 67,
    margin: "auto",
    resizeMode: "contain"
  },
  icon: {
    width: 400,
    height: 250,
    margin: "auto",
    resizeMode: "contain"
  },
  downloadButton:{
    backgroundColor: "#F7941D",
    width: 250,
    height: 50,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    placeItems: "center",
    justifyContent: "center"
  },
  downloadButtonText: {
    color: "#fff",
    fontWeight: "medium"
  }
});
