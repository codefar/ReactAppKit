import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthApp from './login/AuthApp';
import SplashPage from './splash/SplashPage';

const AppNavigator = createSwitchNavigator(
  {
    AuthApp: {
      screen: AuthApp,
    },
    SplashPage: {
      screen: SplashPage,
    },
  },
  {
    initialRouteName: 'SplashPage',
    defaultNavigationOptions: {
      // gestureEnabled: true,
      // cardOverlayEnabled: true,
      // ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default createAppContainer(AppNavigator);
