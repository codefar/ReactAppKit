import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp<{}>;
}

const HomePage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Go To MainPage Screen'}
        onPress={() => {
          console.log('Go To MainPage Screen');
          navigation.push('MainPage', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To Profile Screen'}
        onPress={() => {
          console.log('Go To Profile Screen');
          navigation.push('ProfileScreen', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To MobxApp Screen'}
        onPress={() => {
          navigation.push('MobxApp');
        }}
      />
      <Button
        title={'Go To OrientationPage Screen'}
        onPress={() => {
          navigation.push('OrientationPage', {userId: '333999'});
        }}
      />
      <Button
        title={'Go To VideoPage Screen'}
        onPress={() => {
          navigation.push('VideoPage');
        }}
      />
    </View>
  );
};

export default HomePage;
