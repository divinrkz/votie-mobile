import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { API_URL, get, logout } from '../services';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../util/colors';

export default function AccountScreen({navigation}) {


    const getCurrentUser = async () => {
        try {
            let res = await fetch(API_URL + '/auth/current-user', await get());
            
            console.log(await res.json())
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    function logoutUser() {
        logout()
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={{fontSize: 20}}>Account Settings</Text>
                <TouchableOpacity
                            style={styles.button}
                            onPress={logoutUser}
                        >
                            <Text style={styles.buttonText}>Logout </Text>
                        </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,

    },
    textLogo: {
        fontSize: 24
    },
    button: {
        backgroundColor: '#1A56DB',
        borderRadius: 5,
        marginTop: 50,
        elevation: 6,
        width: 80,
        padding: '4%',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 1, height: 13 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    buttonText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});