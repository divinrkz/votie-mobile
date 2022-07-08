import { useFormik } from 'formik';
import React from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../util/colors';

export default function SignUp({ navigation }) {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
            nationalId: '',
            address: '',
            phoneNumber: '',
            names: '',
        },
        onSubmit: async (values, { resetForm }) => {
            if (
                !values.email ||
        !values.password || !values.phoneNumber || 
        !values.nationalId ||
        !values.address || !values.names
            ) {
                Alert.alert('Error', 'You must fill in all fields');
                return;
            }

            const response = await fetch(
                'http://196.223.240.154:8099/supapp/api/auth/client/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                        nationalId: values.nationalId,
                        phoneNumber: values.phoneNumber,
                        address: values.address,
                        names: values.names
                    }),
                }
            );

            const data = await response.json();

            if (data.apierror) {
                console.log(data)
                Alert.alert('Error', data.apierror.message);
            } else {
                Alert.alert('Success', 'You have successfully signed up!');
                resetForm();
                navigation.navigate('SignIn');
            }
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.form}>
                <View style={styles.formText}>
                    <Text style={styles.formTextWelcome}>Register to VOTIE</Text>
                    <Text style={styles.formTexFill}>Please fill in the information</Text>
                </View>

                <View style={styles.inputsArea}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Full Names"
                            autoCapitalize="none"
                            value={values.names}
                            onChangeText={handleChange('names')}
                        />
                        <Icon name="user" size={20} color="#9098b2" style={styles.icon} />
                    </View>

                    <View>
                        <Icon name="mail" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            autoCapitalize="none"
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                    </View>

                    <View>
                        <Icon name="phone" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Phone Number"
                            autoCapitalize="none"
                            value={values.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                        />
                    </View>

                    <View>
                        <Icon name="lock" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Enter your National Id"
                            autoCapitalize="none"
                            value={values.nationalId}
                            onChangeText={handleChange('nationalId')}
                        />
                    </View>

                    <View>
                        <Icon name="lock" size={20} color="#9098b2" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder="Enter your Password"
                            autoCapitalize="none"
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleSubmit();
                        }}
                    >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.horizontalContainer}>
                    <View style={styles.horizontalLine} />
                    <Text style={styles.or}>OR</Text>
                    <View style={styles.horizontalLine} />
                </View>

                <Text style={styles.haveAnAccount}>If you have an account
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}
                >
                    <Text style={{color: '#1A56DB'}}>Sign in</Text>
                </TouchableOpacity>
                </Text>



                {/* <Text style={styles.dontHaveAccount}>
          Don&apos;t have an account?{' '}
                    <Text
                        style={styles.register}
                        onPress={() => {
                            navigation.navigate('Register');
                        }}
                    >
            Register
                    </Text>
                </Text> */}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.default,
        borderRadius: 5,
        elevation: 6,
        padding: '5%',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 1, height: 13 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Roboto_700Bold',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#1A5d6DB',
        height: '100%',
        width: '100%',
    },
    dontHaveAccount: {
        color: '#9098b2',
        fontSize: 15,
        paddingVertical: '5%',
        textAlign: 'center',
    },
    form: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        marginTop: '20%',
        padding: 20,
    },
    formTexFill: {
        color: '#9098b2',
        fontSize: 15,
        paddingBottom: '1%',
    },
    formText: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
    },
    formTextWelcome: {
        color: '#9098b2',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: '1%',
    },
    haveAnAccount: {
        color: '#9098b2',
        fontSize: 15,
        paddingVertical: '5%',
        textAlign: 'center',
    },
    horizontalContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalLine: {
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        flex: 1,
        height: 1,
    },
    icon: {
        left: 12,
        position: 'absolute',
        top: 18,
    },
    input: {
        borderColor: colors.border,
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
        color: colors.default,
        fontFamily: 'Roboto_700Bold',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 3,
    },
    or: {
        color: colors.border,
        textAlign: 'center',
        width: 50,
    },

});
