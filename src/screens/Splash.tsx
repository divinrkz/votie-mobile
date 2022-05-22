import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextLogo from '../components/TextLogo';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <TextLogo type="lander" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7941D',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        fontSize: 24,
    },
});
