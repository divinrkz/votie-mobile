import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Supa</Text>
          <Text style={styles.logoTextM}>Menu</Text>
        </View>

        <View style={styles.formText}>
          <Text style={styles.formTextWelcome}>Welcome...</Text>
          <Text style={styles.formTexFill}>Please fill in the information</Text>
        </View>

        <View style={styles.inputsArea}>
          <TextInput style={styles.input} placeholder="Fullname" />
          <TextInput style={styles.input} placeholder="Phone number" />
          <TextInput style={styles.input} placeholder="Your email" />
          <TouchableOpacity title="sign in" style={styles.button}>
            {/* style={styles.button} */}
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.horizontalLine} />
        </View>

        <Text style={styles.haveAnAccount}>If you have a PMG account</Text>

        <TouchableOpacity title="sign in" style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.dontHaveAccount}>
          Don't have an account? <Text style={styles.register}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7941D",
    width: "100%",
    height: "100%",
  },
  form: {
    backgroundColor: "#fff",
    marginTop: "20%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  logoTextM: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 3,
    fontFamily: "Roboto_700Bold",
    color: "#F7941D",
  },
  formText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  formTextWelcome: {
    fontSize: 20,
    paddingBottom: "1%",
    color: "#9098b2",
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  formTexFill: {
    fontSize: 15,
    paddingBottom: "1%",
    color: "#9098b2",
  },
  inputsArea: {
    display: "flex",
    paddingVertical: "10%",
  },
  input: {
    borderWidth: 1,
    padding: "5%",
    borderRadius: 5,
    borderColor: "#9098b2",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F7941D",
    borderRadius: 5,
    padding: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalLine: {
    borderBottomColor: "#9098b2",
    borderBottomWidth: 1,
    flex: 1,
    height: 1,
  },
  or: {
    width: 50,
    textAlign: "center",
    color: "#9098b2",
  },
  haveAnAccount: {
    fontSize: 15,
    textAlign: "center",
    paddingVertical: "5%",
    color: "#9098b2",
  },
  dontHaveAccount: {
    fontSize: 15,
    textAlign: "center",
    paddingVertical: "5%",
    color: "#9098b2",
  },
  register: {
    color: "#F7941D",
    fontWeight: "bold",
  },
});
