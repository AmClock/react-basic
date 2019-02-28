import { createStackNavigator, createAppContainer } from 'react-navigation';
import TitleScreen from '../src/screen/TitleScreen'
import MainScreen from '../src/screen/MainScreen';

const AppStackNavigator = createStackNavigator(
    {
    Title:{screen:TitleScreen},
    Main:{ screen: MainScreen },
  },
    {
      headerMode : 'none',
    }
);

export default createAppContainer(AppStackNavigator);