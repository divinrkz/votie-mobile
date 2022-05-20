import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import SplashScreen from "./src/screens/Splash";
import {
  BookmarkStack,
  DashboardStack,
  NotificationStack,
  SearchStack,
  ShoppingCartStack,
  CheckoutStack,
} from "./src/stacks";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { RootStackParams } from "./src/types/Navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { View, TouchableOpacity } from 'react-native';
import DashboardScreen from "./src/screens/Dashboard";
import NotificationScreen from './src/screens/Notification';
import Navigator from './src/components/navigation/Navigator';

const Tab = createBottomTabNavigator();

export default function App() {
  // silence react native eror on navigation
  const Stack: any = createStackNavigator<RootStackParams>();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic,
  });


  if (!fontsLoaded) {
    return <SplashScreen />;
  } else {
    return (
   
      <NavigationContainer>
          <Navigator/>
        
      </NavigationContainer>
    );
  }
}
