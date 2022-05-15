import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import Login from "./src/screens/Login";
import SearchScreen from "./src/screens/Search";
import SplashScreen from "./src/screens/Splash";
import TabNavigation from "./src/components/navigation/TabNavigation";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          {/* <SplashScreen /> */}
          <Stack.Navigator initialRouteName="SplashScreen">
            
            {/* <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: true }}
          />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
