
import React from "react";
import {View} from 'react-native'
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchScreenStack} from '../../stacks';
import SearchScreen from "../../screens/Search";

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
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: () => (
            <Text>dsjakf</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}