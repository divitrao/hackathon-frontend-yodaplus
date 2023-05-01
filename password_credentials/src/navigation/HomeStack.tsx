import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import navigationpath from '../constants/navigationpath';
import CredentialScreen from '../screens/credentialList/CredentialScreen';
import { credential_list } from '../services/services';
import CredentialDetailScreen from '../screens/credentialDetail/CredentialDetailScreen';
import CredentialForm from '../screens/addCredentials/CredentialForm';


const HomeStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>()

    credential_list()
  return (
    <Stack.Navigator>
        <Stack.Screen name={navigationpath.CREDENTIAL_LIST} component={CredentialScreen}  />
        <Stack.Screen name={navigationpath.CREDENTIAL_DETAIL} component={CredentialDetailScreen}/>
        <Stack.Screen name={navigationpath.CREDENTIAL_FORM} component={CredentialForm} />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})