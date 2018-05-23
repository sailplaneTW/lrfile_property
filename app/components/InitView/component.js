
import React, { Component } from 'react'
import {
  Platform,
  Dimensions
} from 'react-native'
import {
  View,
  Text
} from 'native-base'

import styles from 'app/styles'

const { width, height } = Dimensions.get('window')

import Welcome from '../Welcome'
import LoginNavigator from '../LoginNavigator'

export default class InitView extends Component {

  render() {
    const { member, global } = this.props
    const now = new Date().getTime()
    const contentHeight = Platform.OS === 'ios' ? height : height - 20

    if (global.firstLoading) {
      return <Welcome style={{ top: 20, width: width, height: height - 40 }} />
    }

    if (!member.isLogin) {
      return (
        <LoginNavigator />
      )
    }

    if (member.expireTime < (now + 500000)) {
      this.refreshToken()
      return (
        <View style={{ flex: 1, width: width, height: contentHeight, position: 'absolute', left: 0, top: 0, zIndex: 999, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('app/assets/icons/launch_screen.jpg')} style={{ width: width, height: height }} />
          <View style={{ position: 'absolute', bottom: 8, alignItems: 'center' }}>
            <Spinner color={ styles.blackMiddle } />
            <Text style={{ backgroundColor: 'transparent', ...styles.headLineOne }}>登入已過期，重新授權中</Text>
          </View>
        </View>
      )
    }

    return (
      <View />
    )
  }

}
