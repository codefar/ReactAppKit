import {NavigationStackProp} from 'react-navigation-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default class BusinessIndexPage extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To IconListPage'}
            onPress={() => {
              this.props.navigation.push('IconListPage');
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To MobxApp'}
            onPress={() => {
              this.props.navigation.push('MobxApp');
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To OrientationPage'}
            onPress={() => {
              this.props.navigation.push('OrientationPage');
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To ProfileScreen'}
            onPress={() => {
              this.props.navigation.push('ProfileScreen');
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To SignOutPage'}
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.push('SignOutPage');
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
  slide: {
    height: 375,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 375,
    flex: 1,
  },
});
