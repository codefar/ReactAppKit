import HomePage from './home/HomePage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import MobxApp from './home/MobxApp';
import ProfileScreen from './home/ProfileScreen';
import OrientationPage from './home/OrientationPage';
import VideoPage from './home/VideoPage';
import MainPage from './main/MainPage';

const AppNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
    },
    MobxApp: {
      screen: MobxApp,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
    OrientationPage: {
      screen: OrientationPage,
    },
    VideoPage: {
      screen: VideoPage,
      navigationOptions: {
        // header: null,
      },
    },
    MainPage: {
      screen: MainPage,
    },
  },
  {
    initialRouteName: 'MainPage',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default createAppContainer(AppNavigator);
