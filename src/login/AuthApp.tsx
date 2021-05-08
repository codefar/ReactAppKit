import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './SignInScreen';
import MainApp from '../main/MainApp';
import AuthLoadingScreen from './AuthLoadingScreen';

const AuthStack = createStackNavigator(
  {SignIn: SignInScreen},
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      // gestureEnabled: true,
      // cardOverlayEnabled: true,
      // ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AutoSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    MainApp: MainApp,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AutoSwitch);
