import { useFormik } from 'formik';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { API_URL, get, post } from '../services';
import colors from '../util/colors';
import PickerSelect from 'react-native-picker-select';



export default function RegisterCandidatesScreen({navigation}) {
   
  
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            names: '',
            nationalId: '',
            gender: 'MALE',
            missionStatement: ''
        },
        onSubmit: async (values) => {
            values.gender = 'MALE'
            if (!values.names || !values.nationalId || !values.gender || !values.missionStatement) {
                Alert.alert('Error', 'You must fill in all fields');
            }

            
            try {
        
                 const response:any = await fetch(API_URL + '/candidates', await post(values));
        
                 const obj = await response.json()

                 if (obj.success) {
                    navigation.navigate('Candidates')
                 } else {
                    Alert.alert('Error', obj.error);
                 }
                console.log(obj) 
            }
            catch(err) {
                console.log(err)
            }

        },
    });

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={{fontSize: 20}}>Register Candidates</Text>
                <View style={styles.inputsArea}>
                    <View style={{marginBottom: 15}}>
                        <Text style={{fontSize: 15, color: '#6D6D6D', marginBottom: 6}}>Full Names</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Names"
                            autoCapitalize="none"
                            value={values.names}
                            onChangeText={handleChange('names')}
                        />
                    </View>

                    <View style={{marginBottom: 15}}>
                        <Text style={{fontSize: 15, color: '#6D6D6D', marginBottom: 6}}>National Id</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="National Id"
                            autoCapitalize="none"
                            value={values.nationalId}
                            onChangeText={handleChange('nationalId')}
                        />
                    </View>
                    <View style={{marginBottom: 15}}>
                        <Text style={{fontSize: 15, color: '#6D6D6D', marginBottom: 6}}>Gender</Text>
                        <PickerSelect
                              
                        value={values.gender}
                         
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Male', value: 'MALE' },
                                { label: 'Female', value: 'FEMALE' },
                            ]}
        />
                    </View>
                    <View style={{marginBottom: 15}}>
                        <Text style={{fontSize: 15, color: '#6D6D6D', marginBottom: 6}}>Mission Statement</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mission Statement"
                            autoCapitalize="none"
                            value={values.missionStatement}
                            onChangeText={handleChange('missionStatement')}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleSubmit();
                        }}
                    >
                        <Text style={styles.buttonText}>Save candidate</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
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
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#1A5d6DB',
        height: '100%',
        margin: 10,
        width: '90%',
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
        padding: '4%',
        paddingLeft: 20,
    },
    inputsArea: {
        display: 'flex',
        marginLeft: 15,
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
