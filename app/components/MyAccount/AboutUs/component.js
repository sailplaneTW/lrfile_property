import React, { Component } from 'react'

import {
  Container,
  Content
} from 'native-base'

import {
  HeaderLine,
  LinkItem,
  InfoItem
} from 'app/components/Items'

export default class AboutUs extends Component {

  onLinkPress = (title) => {
    const {navigation: {navigate}} = this.props
    switch (title) {
      case '隱私權政策':
        navigate('PrivacyContract')
        break

      case '條款及細則':
        navigate('Contract')
        break

      default:
        break
    }
  }

  render () {
    return (
      <Container>
        <HeaderLine/>
        <Content style={{backgroundColor: '#FFFFFF'}}>
          <InfoItem title="APP版本" label="dev 0.0.1"/>
          <LinkItem title="隱私權政策" onPress={this.onLinkPress}/>
          <LinkItem title="條款及細則" onPress={this.onLinkPress}/>
        </Content>
      </Container>
    )
  }

}