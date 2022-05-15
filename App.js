import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import SplashScreen from "./src/screens/Splash";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SplashScreen/>
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
