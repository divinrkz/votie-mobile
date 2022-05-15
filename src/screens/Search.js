import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TabNavigation from "../components/navigation/TabNavigation";
import TextLogo from "../components/TextLogo";

export default function SearchScreen() {
  return (
        <View style={styles.container}>
            <Text>Ngaho set</Text>
            {/* <TabNavigation /> */}
        </View>
);
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#F7941D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        fontSize: 24
    }
});