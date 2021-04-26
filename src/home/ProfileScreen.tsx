import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

export default class ProfileScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Button
          title={'Go To Feed Screen'}
          onPress={() => {
            this.props.navigation.push('Feed');
          }}
        />
      </View>
    );
  }
}
