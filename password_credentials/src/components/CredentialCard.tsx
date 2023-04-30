import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cred_list_res } from '../../types'

const CredentialCard = ({data}:{data:cred_list_res}) => {
  return (
    <View style={{borderWidth:1,borderColor:"#000000",marginTop:5,height:800,flex:1}}>
      <Text>{data.password}</Text>
    </View>
  )
}

export default CredentialCard

const styles = StyleSheet.create({})