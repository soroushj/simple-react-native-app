import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/CounterScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        flex: 1,
      },
    },
  }
);

export default createAppContainer(AppNavigator);
