import { useFormik } from "formik";
import React from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function SignUp({ navigation }) {
  const { handleSubmit, handleChange, handleReset, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobile: "",
      fullName: "",
    },
    onSubmit: async (values) => {
      if (
        !values.email ||
        !values.password ||
        !values.mobile ||
        !values.fullName
      ) {
        Alert.alert("Error", "You must fill in all fields");
        return;
      }

      const response = await fetch(
        "http://196.223.240.154:8099/supapp/api/auth/client/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            mobile: values.mobile,
            firstName: values.fullName.split(" ")[0],
            lastName: values.fullName.split(" ")[1],
          }),
        }
      );

      const data = await response.json();

      if (!data.ok) {
        Alert.alert("Error", data.apierror.message);
      } else {
        Alert.alert("Success", "You have successfully signed up!");
        handleReset();
        navigation.navigate("SignIn");
      }
    },
  });

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
          <View>
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              autoCapitalize="none"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
            />
            <Icon name="user" size={20} color="#9098b2" style={styles.icon} />
          </View>

          <View>
            <Icon name="phone" size={20} color="#9098b2" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              autoCapitalize="none"
              value={values.mobile}
              onChangeText={handleChange("mobile")}
            />
          </View>

          <View>
            <Icon name="mail" size={20} color="#9098b2" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Your email"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
            />
          </View>

          <View>
            <Icon name="lock" size={20} color="#9098b2" style={styles.icon} />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Your password"
              autoCapitalize="none"
              value={values.password}
              onChangeText={handleChange("password")}
            />
          </View>

          <TouchableOpacity
            title="sign in"
            style={styles.button}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.buttonText}>proceed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.horizontalLine} />
        </View>

        <Text style={styles.haveAnAccount}>If you have a PMG account</Text>

        <TouchableOpacity
          title="sign in"
          style={styles.button}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.dontHaveAccount}>
          Don't have an account?{" "}
          <Text
            style={styles.register}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            Register
          </Text>
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
    paddingLeft: 40,
  },
  button: {
    backgroundColor: "#F7941D",
    borderRadius: 5,
    padding: "5%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
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
  icon: {
    position: "absolute",
    top: 18,
    left: 12,
  },
});
