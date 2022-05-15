import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import SignUp from "./src/screens/SignUp";

// import SignIn from "./src/screens/SignIn";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic,
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {/* <SignIn /> */}
        <SignUp />
        {/* <StatusBar style="auto" /> */}
        {/* <SignIn /> */}
        {/* <ChooseKigali /> */}
        {/* <SplashScreen /> */}
        {/* <SignUp /> */}
      </View>
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
