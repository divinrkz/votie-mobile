import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextLogo(props) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textLogo}>Supa</Text>
            <Text style={styles.textLogo}>Menu</Text>
        </View>
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