import { StackNavigator } from 'react-navigation';

import Menu from '../MyAccount/Menu'

const mainNavigatorOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle: ' ',
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      color: '#000000',
    }
  }
}

const MainNavigator = StackNavigator({

  Menu: { screen: Menu },
  
}, mainNavigatorOptions);


export default MainNavigator;



