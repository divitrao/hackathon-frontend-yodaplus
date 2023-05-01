// /*
//  This code exports types and interfaces related to screen navigation and
//  routing in a React Native app using the react-navigation library, including
//  the screens in the app, their parameters, and their navigation and route props.
// */

import { cred_list_res } from "../../types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Auth Stack screens
export type LoginScreenParamList = undefined;
export type RegisterParamList = undefined
export type CredentialParamList = undefined
export type CredentialDetailParamList = {data:cred_list_res,icon:string}
export type CredentialFormParamList = undefined

// Home Stack screens


export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  Login: LoginScreenParamList;
  Register: RegisterParamList;
  CredentialList: CredentialParamList;
  CredentialDetail : CredentialDetailParamList;
  CredentialForm: CredentialFormParamList;
};


export type PropsCredentialDetail = NativeStackScreenProps<RootStackParamList,'CredentialDetail'>
export type PropsCredentialList = NativeStackScreenProps<RootStackParamList,'CredentialList'>
export type PropsCredentialForm = NativeStackScreenProps<RootStackParamList,'CredentialForm'>