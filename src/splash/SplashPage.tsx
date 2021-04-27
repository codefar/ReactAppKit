import React from 'react';
import {Button, View} from 'react-native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {NavigationParams, NavigationState} from 'react-navigation';

interface Props {
  navigation: StackNavigationProp<NavigationState, NavigationParams>;
}

export default function SplashPage(props: Props) {
  return (
    <View
      style={{
        backgroundColor: '#cccccc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title={'Splash Page'}
        onPress={() => {
          props.navigation.replace('AuthApp');
        }}
      />
    </View>
  );
}
