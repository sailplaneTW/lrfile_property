import component from './container'

import React from 'react'
import {
  Button,
  Text,
} from 'native-base'


component.navigationOptions = ({navigation}) => {

  const { state: { params = {}, }, } = navigation
  const onPress = params.onDonePress

  return {
    title: '條款及細則',
    headerBackTitle: ' ',
  }
}


export default component