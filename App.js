import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./screens/Login";
import MenuSelector from "./screens/MenuSelector";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <MenuSelector></MenuSelector>
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
