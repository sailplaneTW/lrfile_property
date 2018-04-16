import { StackNavigator } from 'react-navigation'

import styles from 'app/styles'
import Menu from '../MyAccount/Menu'
import AboutUs from '../MyAccount/AboutUs'
import Contract from '../MyAccount/Contract'
import PrivacyContract from '../MyAccount/PrivacyContract'


const mainNavigatorOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: ' ',
    headerTintColor: styles.lightBlue,
    headerTitleStyle: {
      color: styles.blackDark,
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

const MainNavigator = StackNavigator({

  Menu: { screen: Menu },
  AboutUs: { screen: AboutUs },

}, mainNavigatorOptions)


const MyAccountRouteNavigator = StackNavigator({
  Main: { screen: MainNavigator },
  Contract: { screen: Contract, navigationOptions: { tabBarVisible: false }  },
  PrivacyContract: { screen: PrivacyContract, navigationOptions: { tabBarVisible: false } },
}, routeNavigatorOptions)



export default MyAccountRouteNavigator



