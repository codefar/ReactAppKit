import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

const HomePage = (prop: Props) => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Go To MainPage Screen'}
        onPress={() => {
          console.log('Go To MainPage Screen');
          prop.navigation.push('MainPage', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To Profile Screen'}
        onPress={() => {
          console.log('Go To Profile Screen');
          prop.navigation.push('ProfileScreen', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To MobxPage Screen'}
        onPress={() => {
          prop.navigation.push('MobxApp');
        }}
      />
      <Button
        title={'Go To OrientationPage Screen'}
        onPress={() => {
          prop.navigation.push('OrientationPage', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To VideoPage Screen'}
        onPress={() => {
          prop.navigation.push('VideoPage');
        }}
      />
    </View>
  );
};

export default HomePage;
