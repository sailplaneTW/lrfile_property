
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { YellowBox, View } from 'react-native'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'

import InitView from './components/InitView'
import Spinner from './components/Spinner'
import MainTabNavigator from './components/MainTabNavigator'

const { persistor, store } = configureStore()
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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

