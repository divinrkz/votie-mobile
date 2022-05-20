import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";

import { useContext } from "react";
import SplashScreen from "../../screens/Splash";
import Login from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import DashboardScreen from "../../screens/Dashboard";
import NotificationScreen from "../../screens/Notification";
import RestaurantMenu from "../../screens/RestaurantMenu";
import SearchScreen from "../../screens/Search";
import ShoppingCartScreen from "../../screens/ShoppingCart";
export default function Navigator() {
    return <AppNavigator />;;
}
function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={SignUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
const Tabs = createBottomTabNavigator();
function AppNavigator() {
    return (
        <Tabs.Navigator
            initialRouteName="Search"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarInactiveTintColor: "black",
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 80,
                    paddingBottom: 10,
                    padding: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginHorizontal: 5,
                    position: "absolute",
                    borderColor: "white",
                    elevation: 10,
                },
                tabBarButton: (props) => {
                    return (
                        <View {...props}>
                            <View
                                style={{
                                    minWidth: 50,
                                    minHeight: 50,
                                    borderRadius: 10,
                                    backgroundColor: props.accessibilityState
                                        .selected
                                        ? "#F6E3DB"
                                        : "white",
                                }}
                            >
                                <TouchableOpacity {...props} />
                            </View>
                        </View>
                    );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#F7941D",
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
                component={DashboardScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="bell-badge-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Notification"
                component={NotificationScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="line-scan"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Scan"
                component={RestaurantMenu}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Clock"
                component={SearchScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Cart"
                component={ShoppingCartScreen}
            />
        </Tabs.Navigator>
    );
}