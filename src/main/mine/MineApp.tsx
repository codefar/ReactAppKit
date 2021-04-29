import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MobxPage from './business/MobxPage';
import ProfilePage from './business/ProfilePage';
import OrientationPage from './business/OrientationPage';
import VideoPage from './business/VideoPage';
import MinePage from './MinePage';
import SignOutPage from './business/SignOutPage';
import VideoPlayer from "./business/VideoPlayer";

const AppNavigator = createStackNavigator(
  {
    MinePage: {
      screen: MinePage,
    },
    MobxApp: {
      screen: MobxPage,
    },
    ProfileScreen: {
      screen: ProfilePage,
    },
    OrientationPage: {
      screen: OrientationPage,
    },
    SignOutScreen: {
      screen: SignOutPage,
    },
    VideoPage: {
      screen: VideoPage,
      navigationOptions: {
        // header: null,
      },
    },
    VideoPlayer: {
      screen: VideoPlayer,
      navigationOptions: {
        // header: null,
      },
    },
  },
  {
    initialRouteName: 'MinePage',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default createAppContainer(AppNavigator);
