import React, { Component } from 'react'
import {
  Alert
} from 'react-native'


export default class BasicComponent extends Component {

  _render() {
    return null
  }

  errorHandler = (error) => {
    switch (error) {
      case 'AccessTokenHasExpired':
        const { actions } = this.props
        actions.member.accessExpired()
        return true

      default:
        return false
    }
  }

  showAlertMessage = (title, message = ' ', doneAction, cancelAction) => {
    if (title === '') {
      return
    }
    const actions = []
    if (cancelAction !== undefined) {
      switch (typeof cancelAction) {
        case 'object':
          actions.push(cancelAction)
          break

        case 'function':
          actions.push({
            text: '取消',
            onPress: () => {
              cancelAction()
            }
          })
          break
      }
    }
    switch (typeof doneAction) {
      case 'object':
        actions.push(doneAction)
        break

      case 'function':
        actions.push({
          text: '知道了',
          onPress: () => { doneAction() }
        })
        break

      default:
        actions.push({
          text: '知道了',
          onPress: () => { }
        })
        break
    }

    Alert.alert(title, message, actions)
  }

  render() {
    let layout = this._render()
    return layout
  }

}