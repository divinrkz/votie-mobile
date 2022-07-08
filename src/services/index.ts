import * as SecureStore from 'expo-secure-store';
import jwt from "jwt-decode";

export const API_URL = 'http://172.18.1.223:4008/api';

export const  get = async () => {
    console.log('jksdfa', await getToken())
   return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await getToken()}`
        }
    }
}

export const post = async (data: any) => {
    return {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${await getToken()}`
         },
         body: JSON.stringify(data),
     }
 }


 export const setToken = async (token: string) => {
    await SecureStore.setItemAsync('token', JSON.stringify(token));
 }


export async function getToken() {
    const token = await SecureStore.getItemAsync('token');
  const userToken = JSON.parse(token as string);
  return userToken;
}

export async function isLoggedIn() {
  const token = await getToken();

  if (token) {
   try {
    const decode = jwt(token);
    return decode;
   } catch (error) {
    console.log(error)
    return false;
   }
  } 
  return false;
}

export async function removeToken() {
    await SecureStore.deleteItemAsync('token');
}

export async function logout() {
    
    await removeToken();
}