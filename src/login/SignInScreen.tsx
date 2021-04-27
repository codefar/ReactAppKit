import React from 'react';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {NavigationParams, NavigationState} from 'react-navigation';
import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<NavigationState, NavigationParams>;
}

export default class SignInScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <View style={{margin: 10}}>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
