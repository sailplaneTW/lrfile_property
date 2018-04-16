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
    title: 'Home',
    headerBackTitle: ' ',
  }
}


export default component