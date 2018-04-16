import React, { Component } from 'react';

import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
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

import Icon from 'app/components/Icon';
import styles from 'app/styles';

class NavHeader extends Component {

  onBackPress = () => {
    const { navigation: { goBack }} = this.props;
    goBack();
  }

  render() {
    return (
      <Header style={{ backgroundColor: styles.white }}>
        <Left>
          <Button transparent onPress={this.onBackPress}>
            <Icon name="chevron-thin-left" family="Entypo" style={{ fontSize: 25, color: styles.lightBlue }} />
          </Button>
        </Left>
        <Body>
          <Text style={{ fontSize: 16, fontWeight: '400', }}>隱私權政策</Text>
        </Body>
        <Right>
        </Right>
      </Header>
    );
  }
}


export default class PrivacyContract extends Component {


  render() {
    return (
      <Container>
        <NavHeader {...this.props}  />
        <HeaderLine />
        <WebView source={{uri: 'http://lrfile.alp.com.tw/privacy-policy/index.html'}}>

        </WebView>
      </Container>
    )
  }

}
