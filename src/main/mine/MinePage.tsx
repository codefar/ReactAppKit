import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';
import NavigationService from '../../NavigationService';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

export default class MinePage extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>MinePage Screen</Text>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To Find Tab'}
            onPress={() => {
              NavigationService.navigate('Find', {userId: '333999'});
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To MediaControls'}
            onPress={() => {
              NavigationService.navigate('MediaControls', {});
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
