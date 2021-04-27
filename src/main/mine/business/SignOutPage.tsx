import React from 'react';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {NavigationParams, NavigationState} from 'react-navigation';
import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SignOutPage extends React.Component<{
  navigation: StackNavigationProp<NavigationState, NavigationParams>;
}> {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={{margin: 10}}>
        <View style={{margin: 10}}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="Actually, sign me out :)"
            onPress={this._signOutAsync}
          />
        </View>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
