import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import VideoPage from '../video/VideoPage';
import BusinessApp from '../business/BusinessApp';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from './home/HomePage';
import FindPage from './find/FindPage';
import MinePage from './mine/MinePage';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import NavigationService from '../NavigationService';
import {createAppContainer} from 'react-navigation';
import MediaControls from '../video/MediaControls';
import CarouselPage from '../component/App';
import DemoListPage from '../component/DemoListPage';
import BigHead from '../component/dots/BigHead';
import IntroData from '../component/dots/IntroData';
import ButtonNavigation from '../component/dots/ButtonNavigation';
import WormDotExample from '../component/dots/WormDotExample';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: '首页',
      },
    },
    Find: {
      screen: FindPage,
      navigationOptions: {
        tabBarLabel: '发现',
      },
    },
    Mine: {
      screen: MinePage,
      navigationOptions: {
        tabBarLabel: '我的',
      },
    },
  },
  {
    backBehavior: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName: string = '';
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Mine') {
          iconName = 'user';
        } else if (routeName === 'Find') {
          iconName = 'find';
        }
        return (
          <View>
            <AntDesign name={iconName} size={24} color={tintColor} />
          </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#999',
    },
  },
);

const TopLevelNavigator = createStackNavigator(
  {
    MainTabPage: {
      screen: MainTabNavigator,
    },
    BusinessApp: {
      screen: BusinessApp,
    },
    DemoListPage: {
      screen: DemoListPage,
    },
    MediaControls: {
      screen: MediaControls,
    },
    CarouselPage: {
      screen: CarouselPage,
    },
    VideoPage: {
      screen: VideoPage,
    },
    BigHead: {
      screen: BigHead,
    },
    IntroData: {
      screen: IntroData,
    },
    ButtonNavigation: {
      screen: ButtonNavigation,
    },
    WormDotExample: {
      screen: WormDotExample,
    },
  },
  {
    initialRouteName: 'MainTabPage',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const AppContainer = createAppContainer(TopLevelNavigator);

export default class MainApp extends React.Component<any, any> {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef: any) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
