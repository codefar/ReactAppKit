// import RNIJKPlayer from 'react-native-ijkplayer';
import React from 'react';
import {Button, Dimensions, StyleSheet, Animated, View} from 'react-native';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {NavigationParams, NavigationState} from 'react-navigation';
import RCTIJKPlayerWithController from 'react-native-ijkplayer/RCTIJKPlayerWithController';

interface Props {
  navigation: StackNavigationProp<NavigationState, NavigationParams>;
}

export default class VideoInfoPage extends React.Component<Props> {
  rctijkplayer = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      playBackInfo: {},
      fadeAnim: new Animated.Value(1),
      hasController: false,
    };
  }

  componentDidMount() {
    let url =
      'http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear1/prog_index.m3u8';
    // let url = "/Users/cong/Downloads/111.mov";
    this.rctijkplayer.start({url: url});
  }

  render() {
    return (
      <View style={styles.container}>
        <RCTIJKPlayerWithController
          ref={rctijkplayer => {
            this.rctijkplayer = rctijkplayer;
          }}
          style={styles.player}
          height={1920 / 2}
          width={width}
          left={0}
          top={100}
        />
        <Button
          title={'Splash Page'}
          onPress={() => {
            this.props.navigation.replace('AuthApp');
          }}
        />
      </View>
    );
  }
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  player: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff0000',
  },
  container2: {
    height: (width / 1920) * 1080,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  indicator: {
    backgroundColor: '#f0e000',
    alignSelf: 'center',
  },
  backgroundVideo1: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#880099',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#88ff99',
  },
});
