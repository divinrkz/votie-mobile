import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import DashboardScreen from "../screens/Dashboard";
import NotificationScreen from "../screens/Notification";
import SearchScreen from "../screens/Search";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import BookmarkScreen from "../screens/Bookmark";
import ShoppingCartScreen from "../screens/ShoppingCart";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const DashboardStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NotificationStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SearchStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BookmarkStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Bookmark"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ShoppingCartStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ShoppingCart"
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  AuthStack,
  DashboardStack,
  NotificationStack,
  SearchStack,
  BookmarkStack,
  ShoppingCartStack,
};
