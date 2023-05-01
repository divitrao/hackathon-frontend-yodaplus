import { StyleSheet, Image, View, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { PropsCredentialDetail } from '../../types/navigationTypes'
import CredentialDetailCard from '../../components/CredentialDetailCard'
import Clipboard from '@react-native-clipboard/clipboard';

const CredentialDetailScreen = ({route,navigation}:PropsCredentialDetail) => {


  const copyToClipBoard = ()=>{
    Clipboard.setString(route.params.data.password)
    ToastAndroid.show("Password Copied to clipboard",ToastAndroid.LONG)
  }

  return (
    <View style={{flex:1,backgroundColor:"#f0f4fa"}}>
      <Image source={{uri:route.params.icon}} style={{height:"30%",width:"90%",marginTop:10,alignSelf:"center"}} resizeMode={"contain"} />
      <CredentialDetailCard data={route.params.data} />
      <TouchableOpacity
      onPress={()=>copyToClipBoard()}
      style={{position:"absolute",bottom:15,width:"90%",height:"10%",backgroundColor:"#f5c345",borderRadius:10,alignSelf:"center"}}
      >
          <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
            <Text style={{fontSize:20,color:"#000000",fontWeight:"700"}}>COPY PASSWORD</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default CredentialDetailScreen

const styles = StyleSheet.create({})