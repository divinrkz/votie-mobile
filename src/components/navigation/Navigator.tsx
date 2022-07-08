import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';

import Login from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import CandidatesScreen from '../../screens/Candidates';
import VotesScreen from '../../screens/Votes';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { getToken, isLoggedIn } from '../../services';
import RegisterCandidatesScreen from '../../screens/RegisterCandidates';
import AccountScreen from '../../screens/Account';

export default function Navigator() {
    return <AppNavigator />;
}

function AppNavigator() {
    const [authUser, setAuthUser] = useState(null);
    const [isAuth, setIsAuth] = useState<any>(false);

    useEffect(() => {
        async function authenticate (){
            const token: any = await getToken();
            if (token) {
               setIsAuth(true)
                setAuthUser(await isLoggedIn() as any)
            }
        }
        authenticate()
    }, []);

    if (authUser) {
        if (authUser.userType == 'ADMIN')
            return <AdminNavigation />;
        else if (authUser.userType == 'VOTER')
            return <VoterNavigation />    
    }

    return <AuthNavigator />

}

function AuthNavigator() {
    const Stack: any = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name="SignIn"
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

const Tabs: any = createBottomTabNavigator();

function VoterNavigation() {
    console.log('here voter')
    return (
        <Tabs.Navigator
            initialRouteName="Candidates"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: '#1A56DB',
                    height: 80,
                    paddingBottom: 10,
                    padding: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginHorizontal: 5,
                    position: 'absolute',
                    borderColor: '#1A56DB',
                    elevation: 15,
                },
                tabBarButton: (props) => {
                    return (
                        <View {...props}>
                            <View
                                style={{
                                    minWidth: 50,
                                    minHeight: 50,
                                    borderRadius: 10,
                                    backgroundColor: props.accessibilityState.selected
                                        ? '#1A56DB'
                                        : 'white',
                                }}
                            >
                                <TouchableOpacity {...props} />
                            </View>
                        </View>
                    );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#ffffff',
            }}
        >
            <Tabs.Screen
                name="Candidates"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
                component={CandidatesScreen}
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
                name="Votes"
                component={VotesScreen}
            />
        </Tabs.Navigator>
    );
}

function AdminNavigation() {
    return (
        <Tabs.Navigator
            initialRouteName="Candidates"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#1A56DB',
                    height: 70,
                    paddingBottom: 8,
                    padding: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginHorizontal: 0,
                    marginVertical: 0,
                    position: 'absolute',
                    borderColor: 'white',
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
                                    backgroundColor: props.accessibilityState.selected
                                        ? 'white'
                                        : '#1A56DB',
                                }}
                            >
                                <TouchableOpacity {...props} />
                            </View>
                        </View>
                    );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#1A56DB',
            }}
        >
            <Tabs.Screen
                name="Candidates"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-multiple"
                            size={28}
                            color={color}
                        />
                    ),
                }}
                component={CandidatesScreen}
            />
              <Tabs.Screen
                name="RegisterCandidate"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-multiple-plus"
                            size={28}
                            color={color}
                        />
                    ),
                }}
                component={RegisterCandidatesScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="ballot-outline"
                            size={38}
                            color={color}
                        />
                    ),
                }}
                name="Votes"
                component={VotesScreen}
            />

        <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-switch-outline"
                            size={28}
                            color={color}
                        />
                    ),
                }}
                name="Account"
                component={AccountScreen}
            />
        </Tabs.Navigator>
    );
}
