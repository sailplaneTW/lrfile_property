import React, { Component } from 'react'

import {
  Text
} from 'native-base'
import {
  View,
  Image,
  Dimensions
} from 'react-native'
import {
  IndicatorViewPager,
  PagerDotIndicator
} from 'rn-viewpager'

import styles from 'app/styles'

import {Button} from 'native-base'

const { width, height } = Dimensions.get('window')

export default class WelcomeView extends Component {

  onPress = () => {
    const { actions } = this.props
    actions.global.finishFirstLoading()
  }

  render() {
    const { style } = this.props
    return (
      <IndicatorViewPager style={style} indicator={this._renderDotIndicator()} >
        <View>
          <Image source={require('app/assets/welcome-1.jpg')} style={{ width: width, height: height }} />
        </View>
        <View>
          <Image source={require('app/assets/welcome-2.jpg')} style={{ width: width, height: height }} />
          <View style={{ width: width, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 64, height: 48 }}>
            <View style={{ width: 180 }}>
              <Button full rounded onPress={this.onPress} style={{ backgroundColor: styles.lightBlue }} >
                <Text>
                  開始體驗
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </IndicatorViewPager>
    )
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={2} selectedDotStyle={{ backgroundColor: styles.lightBlue }} />
  }

}
