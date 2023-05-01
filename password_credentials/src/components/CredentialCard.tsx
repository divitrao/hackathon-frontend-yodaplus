import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { cred_list_res, website_url_icon_res } from '../../types'
import { website_url } from '../services/services'
import { useNavigation } from '@react-navigation/native';
import navigationpath from '../constants/navigationpath';

const CredentialCard = ({data}:{data:cred_list_res}) => {

  const [websiteUrlIcon,setWebsiteUrlIcon] = useState<string|null>(null)
  const navigation = useNavigation()

  const find_url_icon = async(url:string)=>{
     const response:website_url_icon_res = await website_url(url)

     if(response.icons.length>0){
      setWebsiteUrlIcon(response.icons[0].url)
     }
     else{
       setWebsiteUrlIcon(null)
     }

  }
  find_url_icon(data.website)


  console.log(websiteUrlIcon)
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate(navigationpath.CREDENTIAL_DETAIL,{data:data,icon:websiteUrlIcon})}
     style={{
      height: 90,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: "#ffffff",
      borderRadius: 15,
      shadowColor: "#000000",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,

      }}>
      <View style={{flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-between"}}>
        <View style={{height:70,width:70,borderRadius:70/2,alignItems:"center",justifyContent:"center"}}>
          {websiteUrlIcon ? 
            <Image source={{uri:websiteUrlIcon}} style={{height:50,width:50}} resizeMode={'cover'} />
          :
          <View style={{height:70,width:70,borderRadius:70/2,backgroundColor:"#000000"}}  />
          }
        </View>
          <View>
            <Text style={{fontSize:16,color:"#000000",fontWeight:"400"}} numberOfLines={3}>{data.website}</Text>
          </View>
          
      </View>
     
    </TouchableOpacity>
  )
}

export default CredentialCard

const styles = StyleSheet.create({})