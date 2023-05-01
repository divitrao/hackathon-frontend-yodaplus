import { StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { cred_list_res } from '../../types'

const CredentialDetailCard = ({data}:{data:cred_list_res}) => {
  return (
    <View 
    style={{
        marginHorizontal:15,
        marginTop:10,
        borderRadius: 15,
        backgroundColor:"#ffffff",
      shadowColor: "#000000",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
    }}
    >
        <View style={{alignSelf:"center",marginVertical:10}}>
            <Text style={{color:"#000000",fontWeight:"800",fontSize:25,textAlign:"center"}}>Username/Email</Text>

            <Text style={{color:"#000000",fontWeight:"500",fontSize:18,marginTop:5,textAlign:"center"}}>{data.credential}</Text>

            <Text style={{color:"#000000",fontWeight:"800",fontSize:25,textAlign:"center", marginTop:10}}>Website</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(data.website)}>
            <Text style={{color:"#0000EE",fontWeight:"500",fontSize:18,marginTop:5,textAlign:"center"}}>{data.website}</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default CredentialDetailCard

const styles = StyleSheet.create({})