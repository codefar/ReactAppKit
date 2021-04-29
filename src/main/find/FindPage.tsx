import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';
import Swiper from 'react-native-swiper';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

export default class FindPage extends React.Component<Props> {
  _renderItem = (item: {item: string; index: number}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.item}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={styles.wrapper}>
          <Swiper
            containerStyle={styles.wrapper}
            paginationStyle={{bottom: 5}}
            showsButtons={false}
            dotColor={'#aaa'}
            activeDotColor={'#fff'}
            loop={true}
            autoplay={true}
            height={180}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <Button
          title={'Go To MainPage Screen'}
          onPress={() => {
            console.log('Go To MainPage Screen');
            this.props.navigation.push('MainPage', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To Profile Screen'}
          onPress={() => {
            console.log('Go To Profile Screen');
            this.props.navigation.push('ProfileScreen', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To MobxPage Screen'}
          onPress={() => {
            this.props.navigation.push('MobxApp');
          }}
        />
        <Button
          title={'Go To OrientationPage Screen'}
          onPress={() => {
            this.props.navigation.push('OrientationPage', {userId: '333999'});
          }}
        />
        <Button
          title={'Go To VideoPage Screen'}
          onPress={() => {
            this.props.navigation.push('VideoPage');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 180,
    overflow: 'hidden',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    height: 175,
    padding: 15,
    backgroundColor: 'gray',
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
