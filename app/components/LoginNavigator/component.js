
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../Login';
import styles from 'app/styles';

const mainNavigatorOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: ' ',
    headerTintColor: styles.lightBlue,
    headerTitleStyle: {
      color: styles.lightBlue,
    }
  }
}

const routeNavigatorOptions = {
  headerMode: 'none',
  mode: 'modal',
  cardStyle: {
    opacity: 1,
  },
  navigationOptions: {
    headerBackTitle: ' ',
    cardStack: {
      gesturesEnabled: true,
    },
  },
}

const LoginNavigator = StackNavigator({
  Login: { screen: Login },
}, mainNavigatorOptions);

export default LoginNavigator;
