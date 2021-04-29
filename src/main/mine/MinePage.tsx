import React from 'react';
import {Button, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

export default class MinePage extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{margin: 5}}>
          <Button
            title={'IconListPage'}
            onPress={() => {
              this.props.navigation.push('IconListPage');
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title={'VideoPlayer App'}
            onPress={() => {
              this.props.navigation.push('VideoPlayer');
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title={'OrientationPage App'}
            onPress={() => {
              this.props.navigation.push('OrientationPage');
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title={'Profile App'}
            onPress={() => {
              this.props.navigation.push('ProfileScreen');
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title={'VideoPage App'}
            onPress={() => {
              this.props.navigation.push('VideoPage');
            }}
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title={'SignOutPage App'}
            onPress={() => {
              this.props.navigation.push('SignOutScreen');
            }}
          />
        </View>
      </View>
    );
  }
}
