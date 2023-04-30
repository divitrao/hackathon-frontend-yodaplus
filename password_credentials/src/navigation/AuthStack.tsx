import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/login/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationpath from '../constants/navigationpath';
import { RootStackParamList } from '../types/navigationTypes';
import RegisterScreen from '../screens/registeration/RegisterScreen';

const AuthStack = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator>
    <Stack.Screen name={navigationpath.LOGIN}  component={LoginScreen}/>
    <Stack.Screen name={navigationpath.REGISTER}  component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})