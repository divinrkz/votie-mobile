
import React from "react";
import {View} from 'react-native'
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchScreenStack} from '../../stacks';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  

return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ffffff",
        activeBackgroundColor: "#FB9224",
        showLabel: false,
        tabStyle: {
          margin: 10,
          borderRadius: 8,
        },
        style: {
          height: 77,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        children={() => <SearchScreenStack/>}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

       <Tab.Screen
        name="Notification"
        children={() => <SearchScreenStack/>}
        // options={{
        //   tabBarIcon: ({ color, size}) => (
        //     <MaterialIcons name="notifications" size={size} color={color} />
        //   ),
        // }}
      />

      <Tab.Screen
        name="Camera"
        children={() => <SearchScreenStack/>}
        // options={({route}) => ({
        //   tabBarVisible: getTabBarVisibility(route),
        //   tabBarIcon: ({ color, size}) => (
        //     <Entypo name="camera" color={color} size={size} />
        //   ),
        // })}
      />

      <Tab.Screen
        name="Chat"
        children={() => <SearchScreenStack/>}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons name="message" color={color} size={size} />
        //   ),
        // }}
      />
      
      <Tab.Screen
        name="profile"
        children={() => <SearchScreenStack/>}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <FontAwesome5 name="user-alt" size={size} color={color} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}