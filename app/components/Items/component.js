import React, { Component } from 'react'
import {
  Dimensions,
  Image,
} from 'react-native'
import {
  Item,
  Button,
  Text,
  View,
  Switch,
  Input,
} from 'native-base'
import Icon from 'app/components/Icon'
import styles from 'app/styles'

const { width, height } = Dimensions.get('window')

export class InfoItem extends Component {

  render() {
    const { title, label, icon } = this.props
    return (
      <Item style={{ flexDirection: 'row', minHeight: 48 }}>
        <View style={{ flex: 1, margin: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            {icon && <Image source={icon} style={{ width: 25, height: 25, marginRight: 8, }} /> }
            <Text style={styles.bodyOne}>{title}</Text>
          </View>
          <Text onLayout={this._onLayout} style={{ marginLeft: 8, maxWidth: 316, ...styles.bodyTwo }} numberOfLines={1} ellipsizeMode="tail">{label}</Text>
        </View>
      </Item>
    )
  }

}

export class HeaderItem extends Component {
  render() {
    const { title } = this.props
    return (
      <View style={{ backgroundColor: styles.lightYellow, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text style={{ margin: 5, marginLeft: 8, ...styles.footOne }}>{title}</Text>
        <View style={{ height: 2, alignSelf: 'stretch', backgroundColor: styles.darkYellow }} />
      </View>
    )
  }
}

export class LinkItem extends Component {

  _onPress() {
    const { onPress, title } = this.props
    if (onPress !== undefined) {
      onPress(title)
    }
  }

  render() {
    const { title, label, icon, iconMargin = 8 } = this.props
    return(
      <Item style={{ flexDirection: 'row', justifyContent: 'space-between', height: 48 }} onPress={() => { this._onPress() }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
          {icon && <Image source={icon} style={{ width: 25, height: 25, marginLeft: 8, }} /> }
          <Text style={{ ...styles.bodyOne, marginLeft: icon === undefined ? 8 : iconMargin, }}>{title}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ margin: 8, ...styles.bodyOne }}>{label}</Text>
          <Image source={require('app/assets/icons/chevron.png')} style={{ width: 16, height: 16 }} />
          <View style={{ width: 8 }} />
        </View>
      </Item>
    )
  }
}

export class SwitchItem extends Component {

  onChange = (value) => {
    const { onValueChange = (value) => {} } = this.props
    onValueChange && onValueChange(value)
  }

  render() {
    const { title, status = true } = this.props
    return(
      <Item style={{  height: 48 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 8, }}>
          <Text sytle={{ fontSize: 16 }}>{title}</Text>
          <Switch value={status} onValueChange={this.onChange} />
        </View>
      </Item>
    )
  }
}

export class InputItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: props.value || null,
    }
  }

  componentWillReceiveProps(nexProps) {
    this.setState({
      value: nexProps.value,
    })
  }

  onTextChange = (text) => {
    const { onTextChange } = this.props
    this.setState({
      value: text,
    })
    onTextChange && onTextChange(text)
  }

  onEndEditing = () => {
    const { onEndEditing } = this.props
    onEndEditing && onEndEditing()
  }

  render() {
    const { value } = this.state
    const { title, error, placeholder, secure = false, inputStyle = {}, style = {}, } = this.props
    return (
      <View style={{ flex: 1, alignSelf: 'stretch', ...style }}>
        <Input
          style={{ flex: 1, height: 40, borderWidth: 2, borderColor: styles.darkYellow, borderRadius: 10, ...styles.footTwo, alignSelf: 'stretch', }}
          secureTextEntry={secure}
          onChangeText={this.onTextChange}
          onEndEditing={this.onEndEditing}
          placeholder={placeholder}
          placeholderTextColor={styles.blackMiddle}
          value={value}
        />
        {(error) && <Text style={contentStyle.errorText}>{error}</Text> }
      </View>
    )
  }
}

export class HeaderLine extends Component {

  render() {
    return (
      <View style={{ height: 0, alignSelf: 'stretch', backgroundColor: styles.darkYellow }}  />
    )
  }
}
