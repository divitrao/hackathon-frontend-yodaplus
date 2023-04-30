import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import navigationpath from '../constants/navigationpath';
import CredentialScreen from '../screens/CredentialList/CredentialScreen';
import { credential_list } from '../services/services';


const HomeStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>()

    credential_list()
  return (
    <Stack.Navigator>
        <Stack.Screen name={navigationpath.CREDENTIAL_LIST} component={CredentialScreen}  />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})