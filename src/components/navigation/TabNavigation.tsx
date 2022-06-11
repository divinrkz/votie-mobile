
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../../screens/Search';
import { Text } from 'react-native';
import colors from '../../util/colors';

const Tab: any = createBottomTabNavigator();

export default function TabNavigation() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.white,
                activeBackgroundColor: '#FB9224',
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
                        <Text>More text here</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}