
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
} from 'native-base';

import InitView from './components/InitView'
import Spinner from './components/Spinner'
import MainTabNavigator from './components/MainTabNavigator';

import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'
const { persistor, store } = configureStore()


export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <PersistGate
          persistor={persistor}
        >
          <View style={{ flex: 1, }}>
            <InitView />
            <MainTabNavigator />
            <Spinner />
          </View>
        </PersistGate>

      </Provider>
    )
  }

}

