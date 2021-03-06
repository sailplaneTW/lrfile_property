import React, { Component } from 'react'
import {
  Dimensions,
  DeviceEventEmitter
} from 'react-native'
import {
  View,
  Spinner
} from 'native-base'

const { width, height } = Dimensions.get('window')

class CoverSpinner extends Component {

  constructor(props) {
    super(props)
    this.listeners = []
    this.state = {
      text: '',
      visible: false
    }
  }

  componentDidMount() {
    this.listeners.push(DeviceEventEmitter.addListener('CoverSpinnerShow', (event) => {
      this.setState({
        visible: true,
        text: event.text
      })
    }))

    this.listeners.push(DeviceEventEmitter.addListener('CoverSpinnerClose', () => {
      this.setState({
        visible: false
      })
    }))
  }

  componentWillUnmount() {
    this.listener.forEach((listener) => {
      listener.remove()
    })
  }

  render() {
    const { visible } = this.state
    const defaultStyle = { flex: 1, width: width, height: height, position: 'absolute', left: 0, top: 0, zIndex: 9999, justifyContent: 'center', alignItems: 'center' }
    if (visible === true) {
      return (
        <View style={defaultStyle} >
          <Spinner color='#C4C4C4' />
        </View>
      )
    } else {
      return null
    }
  }

}

CoverSpinner.show = function(text) {
  DeviceEventEmitter.emit('CoverSpinnerShow', { text: text })
}

CoverSpinner.close = function() {
  DeviceEventEmitter.emit('CoverSpinnerClose', { text: '' })
}

export default CoverSpinner