import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import React,{useState} from 'react'
import { styles } from './credentialStyles'
import { add_credentials, credential_list } from '../../services/services'
import { PropsCredentialForm } from '../../types/navigationTypes'
import { setNewDataLoaded, storeCredentialAction } from '../../stores/reducers/credentialReducers'
import { useDispatch } from 'react-redux'
import { cred_list_res } from '../../../types'
import { useAppSelector } from '../../app/hooks'

const CredentialForm = ({navigation}:PropsCredentialForm) => {
    const dispatch = useDispatch()
    const [username,setUsername] = useState<string>("")
    const [website,setWebsite] = useState<string>("")
    const [password1,setPassword1] = useState<string>("")
    const [password2,setPassword2] = useState<string>("")

    const [usernameError,setUsernameError] = useState<string>("")
    const [websiteError,setWebsiteError] = useState<string>("")
    const [password1Error,setPassword1Error] = useState<string>("")
    const [password2Error,setPassword2Error] = useState<string>("")
    const sumbitCredential = ()=>{
           add_credentials(username,website,password1,password2)
           .then(async(res)=>{
            dispatch(setNewDataLoaded())
            navigation.goBack()
           })
           .catch((err)=>{
            let error = err.response.data.data
            if(error['credential']!=undefined){
                    setUsernameError(error['credential'][0])
            }
            if(error['password1']!=undefined){
                    setPassword1Error(error['password1'][0])
            }
            if(error['password2']!=undefined){
                    setPassword2Error(error['password2'][0])
            }
            if(error['website']!=undefined){
                    setWebsiteError(error['website'][0])
            }
            if(error['non_field_errors']!=undefined && error['non_field_errors'][0]=='password Dont Match'){
                    setPassword1Error(error['non_field_errors'][0])
                    setPassword2Error(error['non_field_errors'][0])
            }
           })
            
    }

  return (
    <View style={{backgroundColor:"#ffffff",flex:1,paddingHorizontal:5}}>
      <Text style={styles.heading_style}>username/Email</Text>
      <TextInput 
      style={styles.text_input}
      value={username}
      onChangeText={(val)=>{
        setUsername(val)
        setUsernameError("")
    
    }}
      />
      {  usernameError !="" ? <Text style={styles.error_text}>{usernameError}</Text> : null}
      <Text style={styles.heading_style}>Website</Text>
      <TextInput 
       style={styles.text_input}
       value={website}
       onChangeText={(val)=>{
        setWebsite(val)
        setWebsiteError("")
        }}
      />
      {  websiteError !="" ? <Text style={styles.error_text}>{websiteError}</Text> : null}
       <Text style={styles.heading_style}>Password1</Text>
      <TextInput 
      secureTextEntry={true}
       style={styles.text_input}
       value={password1}
       onChangeText={(val)=>{
        setPassword1(val)
        setPassword1Error("")
        }}
      />
      {  password1Error !="" ? <Text style={styles.error_text}>{password1Error}</Text> : null}
       <Text style={styles.heading_style}>Password2</Text>
      <TextInput 
      secureTextEntry={true}
       style={styles.text_input}
       value={password2}
       onChangeText={(val)=>{
        setPassword2(val)
        setPassword2Error("")
        }}
      />
      {  password2Error !="" ? <Text style={styles.error_text}>{password2Error}</Text> : null}

      <TouchableOpacity onPress={()=>sumbitCredential()} style={styles.submit_button}>
            <Text style={styles.submit_text}>ADD CREDENTIAL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CredentialForm
