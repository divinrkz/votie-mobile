import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import SignUp from "./src/screens/SignUp";
import {NavigationContainer} from '@react-navigation/native'
// import Login from "./src/screens/Login";
import SearchScreen from "./src/screens/Search";
import SplashScreen from "./src/screens/Splash";
import TabNavigation from "./src/components/navigation/TabNavigation";
import DrawerNavigation from "./src/components/navigation/DrawerNavigation";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { AuthStack, BookmarkStack, DashboardStack, NotificationStack, SearchStack, ShoppingCartStack } from "./src/stacks";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic,
  });

  // useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <SplashScreen />;
  } else {
    return (
          <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Dashboard"
                labeled={false}                
               tabBarOptions={{
                  activeTintColor: '#F7941D',
                }}
                tabBarStyle={{
                  shadowOffset: {
                      width: 0,
                      height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 24,
                  borderTopLeftRadius: 21,
                  borderTopRightRadius: 21,
                  backgroundColor: '#fff',
                  position: 'absolute',
                  bottom: 0,
                  padding: 10,
                  width: '100%',
                  height: 84,
                  zIndex: 0,
              }}
                screenOptions={{
                  tabBarShowLabel: false
                }}>
                      <Tab.Screen
                        name="DashboardStack"
                        component={DashboardStack}
                        options={{
                          headerShown:false,
                          tabBarIcon: ({ color, size }) => (
                            <Icon.Button name="home" backgroundColor="transparent" color="black" />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Notifications"
                        component={NotificationStack}
                        options={{
                          headerShown:false,
                          tabBarIcon: ({ color, size }) => (
                            <Icon.Button name="bell" backgroundColor="transparent" color="black" />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Search"
                        component={SearchStack}
                        options={{
                          headerShown:false,
                          tabBarIcon: ({ color, size }) => (
                            <Icon.Button name="briefcase" backgroundColor="transparent" color="black" />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Bookmark"
                        component={BookmarkStack}
                        options={{
                          headerShown:false,
                          
                          tabBarIcon: ({ color, size }) => (
                            <Icon.Button name="clock" backgroundColor="transparent" color="black" />
                          ),
                        }}
                      />
                      <Tab.Screen
                        name="Shopping Cart"
                        component={ShoppingCartStack}
                        options={{
                          headerShown:false,
                          tabBarIcon: ({ color, size }) => (
                            <Icon.Button name="shopping-cart" backgroundColor="transparent" color="black" />
                          ),
                        }}
                      />
              </Tab.Navigator>
          </NavigationContainer>
    );
  }
}
