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
  HeaderLine,
  HeaderItem,
  LinkItem,
} from 'app/components/Items';

import styles from 'app/styles';

class DescrptionItem extends Component {

  render() {
    const { title, description } = this.props;
    return (
      <Item>
        <View style={{ flex: 1, alignSelf: 'stretch', height: 100, margin: 8, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={styles.titleOne}>{title}</Text>
          <View style={{ height: 12 }} />
          <Text style={styles.bodyTwo}>{description}</Text>
        </View>
      </Item>
    )
  }
}


export default class Menu extends Component {

  logoutAction = () => {
    const { actions, globalActions } = this.props;
    actions.member.logout();
    actions.global.initialFirstLoading();
  }

  onLinkPress = (title) => {
    const { navigation: { navigate }} = this.props;
    switch(title) {
      case '個人資訊':
        navigate('AccountInfo');
      break;

      case '關於':
        navigate('AboutUs');
      break;

      case '登出':
        this.logoutAction();
      break;

      default:
      break;
    }
  }

  render() {
    const { member: { info }} = this.props;
    const iconMargin = 16;
    return (
      <Container>
        <HeaderLine />
        <Content style={{ backgroundColor: '#FFFFFF' }}>
          <DescrptionItem title={info.name} description={info.company} />
          <LinkItem title="關於" icon={require('app/assets/icons/info.png')} iconMargin={iconMargin} onPress={this.onLinkPress} />
          <LinkItem title="登出" icon={require('app/assets/icons/logout.png')} iconMargin={iconMargin} onPress={this.onLinkPress} />
        </Content>
      </Container>
    )
  }

}
