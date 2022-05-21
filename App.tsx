import {
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from './src/screens/Splash';
import Navigator from './src/components/navigation/Navigator';


export default function App() {
    // silence react native eror on navigation
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_400Regular_Italic,
    });

    if (!fontsLoaded) {
        return <SplashScreen />;
    } else {
        return (
            <NavigationContainer>
                <Navigator/>
            </NavigationContainer>
        );
    }
}
