import {
  createStackNavigator,
  NavigationStackProp,
  TransitionPresets,
} from 'react-navigation-stack';
import MobxPage from './MobxPage';
import ProfilePage from './ProfilePage';
import OrientationPage from './OrientationPage';
import SignOutPage from './SignOutPage';
import IconListPage from './IconListPage';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import BusinessIndexPage from './BusinessIndexPage';

const AppNavigator = createStackNavigator(
  {
    BusinessIndexPage: {
      screen: BusinessIndexPage,
    },
    MobxApp: {
      screen: MobxPage,
    },
    IconListPage: {
      screen: IconListPage,
    },
    ProfileScreen: {
      screen: ProfilePage,
    },
    OrientationPage: {
      screen: OrientationPage,
    },
    SignOutPage: {
      screen: SignOutPage,
    },
  },
  {
    initialRouteName: 'BusinessIndexPage',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

// export default AppNavigator;
const BusinessAppContainer = createAppContainer(AppNavigator);

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default class BusinessApp extends React.Component<Props> {
  render() {
    return <BusinessAppContainer />;
  }
}
