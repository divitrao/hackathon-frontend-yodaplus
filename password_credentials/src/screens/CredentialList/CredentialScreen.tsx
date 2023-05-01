import { ActivityIndicator, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { credential_list } from '../../services/services'
import { useDispatch } from 'react-redux'
import { cred_list_res } from '../../../types'
import { setListLoadingStatus, storeCredentialAction } from '../../stores/reducers/credentialReducers'
import {
    DataProvider,
    LayoutProvider,
    RecyclerListView,
  } from 'recyclerlistview';
import CredentialCard from '../../components/CredentialCard'
import { PropsCredentialList } from '../../types/navigationTypes'
import navigationpath from '../../constants/navigationpath'

const CredentialScreen = ({navigation}:PropsCredentialList) => {
    const createNewDataProvider = () => {
        return new DataProvider((r1, r2) => r1 !== r2);
      };

      
const newDataAddedStatus = useAppSelector((state)=>state.cred.new_data_added)
const loading_status = useAppSelector((state)=>state.cred.list_is_loading)
const dispatch = useDispatch()
const dimensionsForScreen = Dimensions.get('screen');
const [dataProvider, setDataProvider] = useState<DataProvider>(
    createNewDataProvider(),
  );
const _layoutProvider = new LayoutProvider(
    index => 0,
    (type, dim) => {
      dim.width = dimensionsForScreen.width / 1;
      dim.height = dimensionsForScreen.width /4;
    },
  );
useEffect(()=>{
    (async function (){
    const response:cred_list_res[]  = (await credential_list()).data.data.credential_list
    setDataProvider(
        createNewDataProvider().cloneWithRows(response ?? [])
    )
    dispatch(storeCredentialAction({'cred_list_load':response}))
    dispatch(setListLoadingStatus({'list_loading_status':false}))
   })()
},[newDataAddedStatus])

  return (
    <View style={{height:"100%",width:"100%"}}>
        { loading_status ? 
        <ActivityIndicator /> 
        :
      <RecyclerListView 
      layoutProvider={_layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={(type, data, index) =>{
       return ( <CredentialCard data={data} />)
      }
      }
      />
        }
        <TouchableOpacity onPress={()=>navigation.navigate(navigationpath.CREDENTIAL_FORM)} style={{height:70,width:70,borderRadius:70/2,backgroundColor:"orange",position:"absolute",bottom:50,right:30,justifyContent:"center"}}>
            <Text style={{fontSize:50,textAlign:"center",fontWeight:"500",color:"#ffffff"}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CredentialScreen

const styles = StyleSheet.create({})