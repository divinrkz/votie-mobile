import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Supa</Text>
          <Text style={styles.logoTextM}>Menu</Text>
        </View>
        <View style={styles.formText}>
          <Text style={styles.formTextWelcome}>Welcome...</Text>
          <Text style={styles.formTextSignIn}>Sign in to continue</Text>
        </View>

        <View style={styles.inputsArea}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity title="sign in" style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.horizontalLine} />
        </View>

        <View style={styles.authProvider}>
          <TouchableOpacity title="sign in" style={styles.authButton}>
            <Text style={styles.authButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity title="sign in" style={styles.authButton}>
            <Text style={styles.authButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
          <Text style={styles.dontHaveAccount}>
            Don't have an account?{" "}
            <Text style={styles.formTextSignUp}>Sign up</Text>
          </Text>
        </View>
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
  form: {
    backgroundColor: "#fff",
    marginTop: "20%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
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
    color: "#4d4d4d",
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  formTextSignIn: {
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
    padding: "4%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
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
  authProvider: {
    marginVertical: "5%",
    justifyContent: "space-between",
  },
  authButton: {
    borderWidth: 1,
    borderColor: "#9098b2",
    padding: "5%",
    borderRadius: 5,
    marginVertical: 5,
  },
  authButtonText: {
    color: "#9098b2",
    textAlign: "center",
  },
  formTextSignUp: {
    fontSize: 15,
    paddingBottom: "1%",
    color: "#F7941D",
    fontWeight: "bold",
  },
  dontHaveAccount: {
    textAlign: "center",
    color: "#9098b2",
    paddingVertical: "3%",
  },
  forgotPassword: {
    textAlign: "center",
    color: "#F7941D",
    fontWeight: "bold",
  },
});
