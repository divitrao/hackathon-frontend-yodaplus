/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux'
import { store } from './src/stores/store';



type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {



  return (
    <SafeAreaView>
      <Provider store={store}>

      </Provider>
    </SafeAreaView>
  );
}

export default App;
