import React, { Component } from 'react';

import {
  Container,
  Content,
  View,
  Item,
  Text,
  Button,
} from 'native-base';

import {
  WebView
} from 'react-native';


import {
  HeaderLine,
  HeaderItem,
  LinkItem,
  InfoItem,
} from 'app/components/Items';


export default class AboutUs extends Component {

  onLinkPress = (title) => {
    const { navigation: { navigate }} = this.props;
    switch(title) {

      case '隱私權政策':
        navigate('PrivacyContract');
      break;

      case '條款及細則':
        navigate('Contract');
      break;

      default:
      break;
    }
  }

  render() {

    return (
      <Container>
        <HeaderLine />
        <Content style={{ backgroundColor: '#FFFFFF' }}>
          <InfoItem title="APP版本" label="procdtion 1.1(11)" />
          <LinkItem title="隱私權政策" onPress={this.onLinkPress} />
          <LinkItem title="條款及細則" onPress={this.onLinkPress} />
        </Content>
      </Container>
    )
  }

}
