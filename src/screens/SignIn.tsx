import { useFormik } from 'formik';
import React from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import colors from '../util/colors';
import { API_URL, isLoggedIn, post, removeToken } from '../services';
import { setToken } from '../services/index';


export default function Login({ navigation }) {

    useEffect(() => {
        async function getToken() {
            const token:any = await isLoggedIn()
            if (token) {
                navigation.navigate('Candidates');
            }
        }
        getToken();
    }, []);

    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            if (!values.email || !values.password) {
                Alert.alert('Error', 'You must fill in all fields');
            }

            
            try {
                 const response:any = await fetch(API_URL + '/auth/login', await post(values));
        
                 const obj = await response.json()

                 if (obj.success) {
                    setToken(obj.data.token)
                    console.log('here')
                    navigation.navigate('Candidates')
                 } else {
                    Alert.alert('Error', obj.message);
                    
                 }
                console.log(obj) 
            }
            catch(err) {
                console.log(err)
            }

        },
    });

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.formText}>
                        <Text style={styles.formTextWelcome}>Welcome to VOTIE</Text>
                        <Text style={styles.formTextSignIn}>LOGIN</Text>
                    </View>

                    <View style={styles.inputsArea}>
                        <View>
                            <TextInput
                                style={styles.input}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder="Enter your email"
                                autoCapitalize="none"
                            />
                            <Icon name="mail" size={20} color="#1A56DB" style={styles.icon} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={values.password}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={handleChange('password')}
                                placeholder="Enter your Password"
                            />
                            <Icon name="lock" size={20} color="#1A56DB" style={styles.icon} />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleSubmit();
                            }}
                        >
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                       
                        <Text style={styles.dontHaveAccount}>
                            Don&apos;t have an account?{' '}
                            <Text
                                style={styles.formTextSignUp}
                                onPress={() => {
                                    navigation.navigate('Register');
                                }}
                            >
                                Sign up
                            </Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    authButton: {
        alignItems: 'center',
        borderColor: colors.border,
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        marginVertical: 5,
        padding: '3%',
    },
    authButtonText: {
        color: '#1A56DB',
        marginLeft: 50,
        textAlign: 'center',
    },
    authImage: {
        height: 40,
    },
    authProvider: {
        justifyContent: 'space-between',
        marginVertical: '5%',
    },
    button: {
        backgroundColor: '#1A56DB',
        borderRadius: 5,
        elevation: 6,
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
    container: {
        backgroundColor: colors.default,
        flex: 1,
        height: '100%',
        width: '100%',
    },
    dontHaveAccount: {
        color: 'black',
        paddingVertical: '3%',
        textAlign: 'center',
    },
    form: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 600,
        marginTop: '50%',
        padding: 20,
    },
    formText: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
    },
    formTextSignIn: {
        color: '#1A56DB',
        fontSize: 15,
        paddingBottom: '1%',
    },
    formTextSignUp: {
        color: '#1A56DB',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: '1%',
    },
    formTextWelcome: {
        color: '#4d4d4d',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: '1%',
    },
    horizontalContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalLine: {
        borderBottomColor: '#1A56DB',
        borderBottomWidth: 1,
        flex: 1,
        height: 1,
    },
    icon: {
        left: 12,
        position: 'absolute',
        top: 22,
    },
    input: {
        borderColor: '#1A56DB',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        padding: '5%',
        paddingLeft: 40,
    },
    inputsArea: {
        display: 'flex',
        paddingVertical: '10%',
    },
    logo: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        fontWeight: 'bold',
    },
    logoTextM: {
        color: '#F7941D',
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    or: {
        color: '#1A56DB',
        textAlign: 'center',
        width: 50,
    },
});
