/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import { Provider } from 'react-redux'
import { store, persistor } from './src/stores/store';
import { login } from './src/services/services';
import Routes from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react'




type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }

  
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>

      <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <Routes />
          </PersistGate>
      </Provider>

      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
