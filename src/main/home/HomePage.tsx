import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

export default class HomePage extends React.Component<Props> {
  // _renderItem = (item: {item: string; index: number}) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.item}</Text>
  //     </View>
  //   );
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View style={{margin: 15}}>
          <Button
            title={'Switch To Find Tab'}
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.navigate('Find', {userId: '333999'});
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
