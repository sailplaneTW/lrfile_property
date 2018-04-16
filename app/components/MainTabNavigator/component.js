
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import MyAccountNavigator from '../MyAccountNavigator'
import styles from 'app/styles';



const route = {
  MyAccountNavigator: { screen: MyAccountNavigator },
}

const options = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  swipeEnabled: false,

  tabBarOptions: {
    inactiveTintColor: styles.lightDark,
    activeTintColor: styles.lightBlue,
    style: {
      backgroundColor: styles.tabarColor,
    },
    indicatorStyle: {
      backgroundColor: styles.lightBlue,
    }
  },
}

const MainTabNavi = TabNavigator(route, options);

export default class TabarNavigator extends Component {

  render() {
    const now = new Date().getTime();
    const { member } = this.props;
    if (member === undefined || !member.isLogin || now > member.expireTime-500000) return null;
    return (
      <MainTabNavi />
    )
  }

}