import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, View} from 'react-native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {NavigationParams, NavigationState} from 'react-navigation';

interface Props {
  navigation: StackNavigationProp<NavigationState, NavigationParams>;
}

export default class AuthLoadingScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log('AuthLoadingScreen ' + Date.now());
    this._bootstrapAsync().then(
      _r => {},
      () => {},
    );
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('AuthLoadingScreen1 ' + userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    console.log('AuthLoadingScreen2 ' + Date.now());
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#cccccc',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title={'Push'}
          onPress={() => {
            this.props.navigation.navigate('Auth');
          }}
        />
      </View>
    );
  }
}
