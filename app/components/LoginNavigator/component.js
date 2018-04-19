
import { StackNavigator } from 'react-navigation'
import Login from '../Login'
import styles from 'app/styles'

const mainNavigatorOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: ' ',
    headerTintColor: styles.lightBlue,
    headerTitleStyle: {
      color: styles.lightBlue
    }
  }
}

const LoginNavigator = StackNavigator({
  Login: { screen: Login }
}, mainNavigatorOptions)

export default LoginNavigator