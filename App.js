import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import MenuSelector from "./src/screens/MenuSelector";
import SplashScreen from "./src/screens/Splash";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <MenuSelector></MenuSelector> */}
      <SplashScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
