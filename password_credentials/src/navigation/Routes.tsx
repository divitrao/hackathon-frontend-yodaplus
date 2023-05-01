import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationpath from '../constants/navigationpath';
import { useAppSelector } from '../app/hooks';

const Routes = () => {
    const RootStack = createNativeStackNavigator();
    
    const acces_token :string|null = useAppSelector((state)=>state.auth.access_token)
    const [loggedIn, setLoggedIn] = useState(acces_token?true:false)
   
    useEffect(()=>{
      if(acces_token){
        setLoggedIn(true)
      }
      else{
        setLoggedIn(false)
      }
    },[acces_token])


  


  return (
    <RootStack.Navigator>
      { !loggedIn ?
      <RootStack.Screen options={{headerShown:false}}  name={navigationpath.AUTH} component={AuthStack}/>
      :
      <RootStack.Screen  options={{headerShown:false}} name={navigationpath.HOME} component={HomeStack} />
      }  
  </RootStack.Navigator>
    
  )
}

export default Routes

const styles = StyleSheet.create({})