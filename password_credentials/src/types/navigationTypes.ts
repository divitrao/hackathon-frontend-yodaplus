// /*
//  This code exports types and interfaces related to screen navigation and
//  routing in a React Native app using the react-navigation library, including
//  the screens in the app, their parameters, and their navigation and route props.
// */

// Auth Stack screens
export type LoginScreenParamList = undefined;
export type RegisterParamList = undefined
export type CredentialParamList = undefined

// Home Stack screens


export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
  Login: LoginScreenParamList;
  Register: RegisterParamList;
  CredentialList: CredentialParamList
};
