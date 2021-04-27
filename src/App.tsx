import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthApp from './login/AuthApp';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import SplashPage from './splash/SplashPage';

const AppNavigator = createStackNavigator(
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
    headerMode: 'none',
    defaultNavigationOptions: {
      // gestureEnabled: true,
      // cardOverlayEnabled: true,
      // ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}
