import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native-web";
import { Rating } from 'react-native-ratings';

export default function Feedback() {
  return (
    <View style={styles.container}>
      <View style={styles.mb}>
        <Text style={styles.centered}>
          Yayy! {"\n"}
          We value all feedback,{"\n"}
          please rate your experience{"\n"}
          below:
        </Text>
      </View>
      <View style={styles.mb}>
        <Rating
          type="custom"
          ratingColor='#F7941D'
          ratingImage={require('../assets/star.png')}
          ratingBackgroundColor='transparent'
        />
      </View>
      <View style={styles.mb}>
        <Text style={styles.centered}>
          Thank you for helping us{"\n"}
          improve our service !
        </Text>
      </View>
      <View style={[styles.mb]}>
        <Image source={require('../assets/yellow-logo.svg')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: Dimensions.get("window").width,
    padding: "15%",
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
  }
});
