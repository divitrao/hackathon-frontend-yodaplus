import { ActivityIndicator, StyleSheet, Text, View,Dimensions } from 'react-native'
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

const CredentialScreen = () => {
    const createNewDataProvider = () => {
        return new DataProvider((r1, r2) => r1 !== r2);
      };

      

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
},[])

console.log(dataProvider,"][][][][")
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
    </View>
  )
}

export default CredentialScreen

const styles = StyleSheet.create({})