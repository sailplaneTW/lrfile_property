
import React, { Component } from 'react';

import {
  ActivityIndicator,
  Image,
  Dimensions,
  Alert,
} from 'react-native'
import {
  View,
  Container,
  Content,
  Button,
  Text,
  Item,
  Form,
  Label,
  Input,
} from 'native-base'
import {
  HeaderLine,
  InputItem,
} from 'app/components/Items'

import styles from 'app/styles'
import * as api from 'app/api'
import component from 'app/components/BasicComponent'
import Spinner from 'app/components/Spinner'
const { height, width } = Dimensions.get('window')

const localStyle = {
  inputView: { 
    width: 300, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  registerIcon: {
    height: 196,
  },
  loginButtonView: {
    alignItems: 'center', 
    width: 150,
  },
  loginButtonText: {
    fontWeight: '600'
  },
  loginButton: {
    backgroundColor: styles.lightBlue 
  },
  registerButton: {
    backgroundColor: '#FFFFFF', 
    borderColor: styles.blackMiddle, 
    borderWidth: 1,
  }
}

export default class Login extends component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'propertytest@alp.com.tw', 
      password: 'test1234', 
    }
  }

  componentDidMount() {
    
  }

  forgotAction() {
    const { actions } = this.props;
    actions.member.logout();
  }

  loginAction = () => {

    const {
      username,
      password,
    } = this.state;

    if (!username || !password || username.length === 0 || password.length === 0) {
      Alert.alert('錯誤帳號/密碼', '請確認您的帳號/密碼填寫正確');
      return;
    }

    Spinner.show('登入中');
    api.member.login(username, password)
    .then((response) => {
      console.log('login success ' + response.accessToken);
      let values = [response];
      return api.member.getUserInfo(response.accessToken)
      .then((userInfo) => {
        values.push(userInfo);
        return values;
      })
    }).then((values) => {
      Spinner.close();
      console.log('get userinfo success');
      const { actions } = this.props;
      const tokenInfo = values[0];
      const userInfo = values[1];
      actions.member.userProfile(userInfo);
      actions.member.loginSuccess(username, tokenInfo.accessToken, tokenInfo.refreshToken, tokenInfo.expiresIn || 3600);


    }).catch((error) => {
      Spinner.close();
      console.log(error);
      switch(error) {
        case 'MissingArgs':
          this.showAlertMessage('登入失敗', '請確認你的帳號密碼是否正確');
          break;

        case 'UserNotFoundException':
        case 'NotAuthorizedException':
        case 'UserNotConfirmedException':
        case 'PasswordResetRequiredException':
          this.showAlertMessage('登入失敗', '請確認你的帳號密碼是否正確');
          break;

        case 'AccessTokenHasExpired':
          this.showAlertMessage('登入失敗', '憑證已過期');
          break;

        case 'MFARequired':
          this.showAlertMessage('登入失敗', '目前尚未支援兩步驟驗證，請關閉兩步驟驗證後再登入');
          break;

        case 'NewPasswordRequired':
          this.showAlertMessage('登入失敗', '帳號未開通，請聯絡服務人員');
          break;

        case 'ServerBusy':
          this.showAlertMessage('登入失敗', '伺服器忙碌中');
          break;

        default:
          this.showAlertMessage('登入失敗', '連線逾時，請稍後再試 ' + error);
          break;
      }
      return;
    })


  }

  goRegister = () => {
    const { navigation: { navigate }} = this.props;
    navigate('Register');
  }

  onTextChange(key, value) {
    switch(key) {
      case 'username':
        this.setState({
          username: value,
        });
      break;

      case 'password':
        this.setState({
          password: value,
        });
      break;

      default:
      break;
    }
  }

  _render() {
    const { username, password } = this.state;
    return (
      <Container>
        <HeaderLine />
        <Content padder style={styles.container} contentContainerStyle={styles.contentCenter}>
          <View style={{ height: 30 }} />
          <Image source={require('app/assets/icons/box-register.png')} style={localStyle.registerIcon} resizeMode="contain" />
          <View style={{ height: 24 }} />
          <View style={localStyle.inputView}>
            <InputItem placeholder="請輸入電子信箱" value={username} onTextChange={(text) => { this.onTextChange('username', text); }} />
            <View style={{ height: 24 }} />
            <InputItem placeholder="請輸入密碼" value={password} secure={true} onTextChange={(text) => { this.onTextChange('password', text); }} />
          </View>

          <View style={{ height: 18 }} />
          <View style={localStyle.loginButtonView}>
            <Button full rounded style={localStyle.loginButton} onPress={this.loginAction}>
              <Text style={localStyle.loginButtonText}>
                登入
              </Text>
            </Button>
          </View>


        </Content>
      </Container>
    )
  }

};
