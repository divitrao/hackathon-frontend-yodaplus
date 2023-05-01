import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { login } from '../../services/services'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../stores/reducers/authReducer'
import { login_response } from '../../../types'
import { useAppDispatch } from '../../app/hooks'


const LoginScreen = () => {

    const [username,setUsername] = useState('')
    const [password,setPassWord] = useState('')
    const dispatch = useDispatch()

    const pressed = async()=>{
        const resposne:login_response = (await login(username,password)).data

        dispatch(loginAction({'access_token':resposne.access,'refresh_token':resposne.refresh}))
    }

  return (
    <View>
      <TextInput 
      style={{borderWidth:1,borderColor:"#000000"}}
      onChangeText={(val)=>setUsername(val)}
      value={username}
      />
      <TextInput 
      onChangeText={(val)=>setPassWord(val)}
      style={{borderWidth:1,borderColor:"#000000",marginTop:5}}
      value={password}
      secureTextEntry={true}
      />
      <TouchableOpacity onPress={()=>pressed()} style={{width:"90%",height:35}}>
        <View style={{backgroundColor:"orange"}}>
            <Text>Login </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})