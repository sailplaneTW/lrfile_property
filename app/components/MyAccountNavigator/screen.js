import React from 'react'
import {
  Image,
} from 'react-native'
import component from './component'



component.navigationOptions = {
  tabBarLabel: '我的帳號',
  tabBarIcon: ({tintColor}) => (
    <Image
      source={require('../../assets/account.png')}
      style={{ width: 30, height: 30, tintColor: tintColor }}
    />
  )
}

export default component