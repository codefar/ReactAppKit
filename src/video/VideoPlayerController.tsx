import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {NavigationParams, NavigationRoute} from 'react-navigation';
import VideoPlayerControllComponent from 'react-native-video-controls';

interface Props {
  navigation: NavigationStackProp<NavigationRoute, NavigationParams>;
}

interface State {
  rate: number;
  volume: number;
  muted: boolean;
  resizeMode: string;
  duration: number;
  currentTime: number;
  paused: boolean;
}

export default class VideoPlayerController extends Component<Props, State> {
  constructor(prop: Props) {
    super(prop);
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayerControllComponent
          style={styles.videoContainer}
          isFullScreen={false}
          source={{
            uri:
              'https://vd3.bdstatic.com/mda-mbsravd40w3qp0u3/v1-cae/1080p/mda-mbsravd40w3qp0u3.mp4',
          }}
          navigator={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  videoContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
