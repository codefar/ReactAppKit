import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
import Video, {
  OnBandwidthUpdateData,
  OnLoadData,
  OnProgressData,
  OnSeekData,
} from 'react-native-video';
import Slider from 'react-native-slider';
import Orientation from 'react-native-orientation';
import {observer} from 'mobx-react';
import {action, computed, observable} from 'mobx';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

@observer
export default class VideoPage extends React.Component {
  private _video: Video | null = null;
  @observable data: OnLoadData | null = null;
  @observable
  orientation: Orientation.orientation | null = Orientation.getInitialOrientation();
  @observable rate: number = 1;
  @observable volume: number = 3;
  @observable muted: boolean = false;
  @observable resizeMode: string = '';
  @observable duration: number = 0;
  @observable currentTime: number = 0;
  @observable paused: boolean = false;

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
    this.duration = data.duration;
  };

  @action
  onProgress = (data: OnProgressData) => {
    console.log('onProgress ' + JSON.stringify(data));
    this.currentTime = data.currentTime;
  };

  @action
  onEnd = () => {
    console.log('onEnd');
    this.paused = true;
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

  _handleVideoInfo = () => {
    Alert.alert('', JSON.stringify(this.data));
  };

  @computed
  get getCurrentTimePercentage() {
    if (this.currentTime > 0 && this.duration > 0) {
      return (
        parseFloat(String(this.currentTime)) / parseFloat(String(this.duration))
      );
    }
    return 0;
  }

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
            paused={this.paused}
            useTextureView
            hideShutterView
            audioOnly
            resizeMode="stretch"
            posterResizeMode="contain"
            progressUpdateInterval={1000}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.onError}
            onProgress={this.onProgress}
            onBandwidthUpdate={(data: OnBandwidthUpdateData) => {
              console.log('onBandwidthUpdate ' + JSON.stringify(data));
            }}
            onSeek={(data: OnSeekData) => {
              console.log('onSeek ' + JSON.stringify(data));
            }}
            onEnd={this.onEnd}
            onFullscreenPlayerWillPresent={() => {
              console.log('onFullscreenPlayerWillPresent');
            }}
            onFullscreenPlayerDidPresent={() => {
              console.log('onFullscreenPlayerDidPresent');
            }}
            onFullscreenPlayerWillDismiss={() => {
              console.log('onFullscreenPlayerWillDismiss');
            }}
            onFullscreenPlayerDidDismiss={() => {
              console.log('onFullscreenPlayerDidDismiss');
            }}
            onVideoLoadStart={() => {
              console.log('onVideoLoadStart');
            }}
            onVideoLoad={() => {
              console.log('onVideoLoad');
            }}
            onVideoEnd={() => {
              console.log('onVideoEnd');
            }}
            onVideoProgress={() => {
              console.log('onVideoProgress');
            }}
            onVideoBuffer={() => {
              console.log('onVideoBuffer');
            }}
            onVideoError={() => {
              console.log('onVideoError');
            }}
            onVideoSeek={() => {
              console.log('onVideoSeek');
            }}
            onTimedMetadata={() => {
              console.log('onTimedMetadata');
            }}
            onVideoFullscreenPlayerWillPresent={() => {
              console.log('onVideoFullscreenPlayerWillPresent');
            }}
            onVideoFullscreenPlayerDidPresent={() => {
              console.log('onVideoFullscreenPlayerDidPresent');
            }}
            onVideoFullscreenPlayerWillDismiss={() => {
              console.log('onVideoFullscreenPlayerWillDismiss');
            }}
            onVideoFullscreenPlayerDidDismiss={() => {
              console.log('onVideoFullscreenPlayerDidDismiss');
            }}
            style={videoStyle}
          />
          <ActivityIndicator
            size={'large'}
            color="#000"
            style={styles.indicator}
          />
          <View style={styles.coverTopContainer}>
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
            <Button
              color={'#0000007f'}
              title={'视频信息'}
              onPress={this._handleVideoInfo}
            />
          </View>
          <View style={styles.coverBottomContainer}>
            <TouchableWithoutFeedback
              onPress={this.onPlayPausePressed}
              style={{padding: 5}}>
              <AntDesign
                name={this.paused ? 'pausecircle' : 'playcircleo'}
                color={'white'}
                size={28}
              />
            </TouchableWithoutFeedback>
            <View style={styles.progress}>
              <Slider
                style={customStyles8.container}
                value={this.getCurrentTimePercentage}
                trackStyle={customStyles8.track}
                thumbStyle={customStyles8.thumb}
                minimumTrackTintColor={'#FF8C00'}
                maximumTrackTintColor={'#fff'}
                thumbTintColor={'#FF8C00'}
              />
            </View>
            <Text
              style={{
                color: '#fff',
                width: 50,
                margin: 5,
              }}>
              {this.duration.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  @action
  private onPlayPausePressed = () => {
    this.paused = !this.paused;
  };
}

const customStyles8 = StyleSheet.create({
  container: {
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: '#FFF',
  },
  track: {
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: '#FFF',
  },
  thumb: {
    width: 10,
    height: 3,
    backgroundColor: '#FF8C00',
    borderRadius: 3 / 2,
  },
});

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },
  container: {
    height: (width / 1920) * 1080,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTopContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    top: 3,
    left: 0,
    right: 0,
  },
  coverBottomContainer: {
    backgroundColor: '#0000007f',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  indicator: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  backgroundVideo1: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  progress: {
    flex: 1,
  },
  innerProgressCompleted: {
    height: 3,
    backgroundColor: '#FF8C00',
  },
  innerProgressRemaining: {
    height: 3,
    backgroundColor: '#eee',
  },
});
