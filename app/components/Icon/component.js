import React, { Component } from 'react'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import ZocialIcon from 'react-native-vector-icons/Zocial'
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons'

export default class Icon extends Component {

  render() {
    const { family, name, style } = this.props
    let icon = (<EntypoIcon style = {style} />)
    switch (family) {
      case 'Entypo':
        icon = (<EntypoIcon name={name} style={style} />)
        break

      case 'EvilIcons':
        icon = (<EvilIconsIcon name={name} style={style} />)
        break

      case 'Feather':
        icon = (<FeatherIcon name={name} style={style} />)
        break

      case 'FontAwesome':
        icon = (<FontAwesomeIcon name={name} style={style} />)
        break

      case 'Foundation':
        icon = (<FoundationIcon name={name} style={style} />)
        break

      case 'Ionicons':
        icon = (<IoniconsIcon name={name} style={style} />)
        break

      case 'MaterialIcons':
        icon = (<MaterialIconsIcon name={name} style={style} />)
        break

      case 'MaterialCommunityIcons':
        icon = (<MaterialCommunityIconsIcon name={name} style={style} />)
        break

      case 'Octicons':
        icon = (<OcticonsIcon name={name} style={style} />)
        break

      case 'Zocial':
        icon = (<ZocialIcon name={name} style={style} />)
        break

      case 'SimpleLineIcons':
        icon = (<SimpleLineIconsIcon name={name} style={style} />)
        break

      default:
        break
    }
    return icon
  }
  
}