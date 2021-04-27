import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import React from 'react';
// import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
// import MobxPage from './mine/business/MobxPage';
// import ProfilePage from './mine/business/ProfilePage';
// import OrientationPage from './mine/business/OrientationPage';
// import VideoPage from './mine/business/VideoPage';
import MineApp from './mine/MineApp';
import HomePage from './home/HomePage';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomePage,
    MineApp: MineApp,
  },
  {
    backBehavior: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName: string = '';
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'MineApp') {
          iconName = 'user';
        }
        return <Ionicons name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

const MainTabPage = createAppContainer(MainTabNavigator);

export default MainTabPage;

// const AppNavigator = createStackNavigator(
//   {
//     MainTabPage: {
//       screen: MainTabPage,
//     },
//     // HomePage: {
//     //   screen: HomePage,
//     // },
//     // MobxApp: {
//     //   screen: MobxPage,
//     // },
//     // ProfileScreen: {
//     //   screen: ProfilePage,
//     // },
//     // OrientationPage: {
//     //   screen: OrientationPage,
//     // },
//     // VideoPage: {
//     //   screen: VideoPage,
//     //   navigationOptions: {
//     //     // header: null,
//     //   },
//     // },
//   },
//   {
//     initialRouteName: 'MainTabPage',
//     headerMode: 'none',
//     defaultNavigationOptions: {
//       gestureEnabled: true,
//       cardOverlayEnabled: true,
//       ...TransitionPresets.SlideFromRightIOS,
//     },
//   },
// );
//
// export default createAppContainer(AppNavigator);
