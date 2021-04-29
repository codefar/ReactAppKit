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

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainApp,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

// export default createAppContainer(SwitchNavigator);
