import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { StyleSheet, View } from "react-native";
import SignIn from "./src/screens/SignIn";
import ChooseKigali from "./src/screens/ChooseKigali";
import SplashScreen from "./src/screens/Splash";
import SignUp from "./src/screens/SignUp";
// import SignIn from "./src/screens/SignIn";

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
      <View style={styles.container}>
        {/* <SignIn /> */}
        <ChooseKigali></ChooseKigali>
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
