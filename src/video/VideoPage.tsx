import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import Video, {OnLoadData} from 'react-native-video';
import Orientation from 'react-native-orientation';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';

@observer
export default class VideoPage extends React.Component {
  private _video: Video | null = null;
  @observable data: OnLoadData | null = null;
  @observable
  orientation: Orientation.orientation | null = Orientation.getInitialOrientation();

  componentDidMount() {
    Orientation.lockToPortrait();
    console.log('VideoPage componentDidMount ' + this.orientation);
    Orientation.addOrientationListener(
      (orientation: Orientation.orientation) => {
        console.log('addOrientationListener ' + orientation);
        this.changeOrientation(orientation);
      },
    );
  }

  @action
  private onLoad = (data: OnLoadData) => {
    console.log('onLoad' + JSON.stringify(data));
    this.data = data;
  };

  private onBuffer = () => {
    console.log('onBuffer');
  };

  private onError = () => {
    console.log('onError');
  };

  private onLoadStart = () => {
    console.log('onLoadStart');
  };

  @action
  private changeOrientation = (orientation: Orientation.orientation) => {
    this.orientation = orientation;
  };

  _handleOnPress = () => {
    Orientation.getOrientation(
      (err: Error, orientation: Orientation.orientation) => {
        console.log('_handleOnPress');
        if (orientation === 'PORTRAIT') {
          //竖屏时、锁定为横屏
          Orientation.lockToLandscape();
        } else {
          //横屏时、锁定为竖屏
          Orientation.lockToPortrait();
        }
      },
    );
  };

  render() {
    let videoStyle =
      this.orientation === 'PORTRAIT'
        ? styles.backgroundVideo
        : styles.backgroundVideo1;
    let container =
      this.orientation === 'PORTRAIT' ? styles.container : styles.container1;
    console.log('render ' + this.orientation);
    return (
      <View style={styles.rootContainer}>
        <View style={container}>
          <Video
            ref={c => {
              this._video = c;
            }}
            source={{
              uri:
                'https://vd3.bdstatic.com/mda-mbsravd40w3qp0u3/v1-cae/1080p/mda-mbsravd40w3qp0u3.mp4',
            }}
            onEnd={() => {}}
            resizeMode="stretch"
            posterResizeMode="contain"
            onLoad={this.onLoad}
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.onError}
            onLoadStart={this.onLoadStart}
            style={videoStyle}
          />
          <ActivityIndicator
            size={'large'}
            color="#00ffff"
            style={styles.indicator}
          />
          <View style={styles.coverContainer}>
            <Button
              color={'#0000007f'}
              title={'旋转'}
              onPress={() => this._handleOnPress()}
            />
            <Button
              color={'#0000007f'}
              title={'进入全屏'}
              onPress={() => {
                this?._video?.presentFullscreenPlayer();
              }}
            />
            <Button
              color={'#0000007f'}
              title={'退出全屏'}
              onPress={() => {
                this?._video?.dismissFullscreenPlayer();
              }}
            />
            <Text>Video Info Demo {JSON.stringify(this.data)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff0000',
  },
  container: {
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
