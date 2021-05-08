import React, {useState, useRef, MutableRefObject} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

const noop = () => {};

const App = () => {
  const videoPlayer: MutableRefObject<Video | null> = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const onSeek = (seek: number) => {
    // @ts-ignore
    videoPlayer?.current.seek(seek);
  };

  const onPaused = (playerState: number) => {
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    // @ts-ignore
    videoPlayer?.current.seek(0);
  };

  const onProgress = (data: OnProgressData) => {
    // Video Player will continue progress even if the video already ended
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    // Uncomment this line if you choose repeat=false in the video player
    // setPlayerState(PLAYER_STATES.ENDED);
  };

  const onSeeking = (currentTime: number) => setCurrentTime(currentTime);

  return (
    <View style={styles.container}>
      <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={ref => (videoPlayer.current = ref)}
        resizeMode="cover"
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        repeat
        style={styles.backgroundVideo}
        volume={0.0}
      />
      <MediaControls
        containerStyle={{}}
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        mainColor="black"
        onFullScreen={noop}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        sliderStyle={{containerStyle: {}, thumbStyle: {}, trackStyle: {}}}
        progress={currentTime}>
        <MediaControls.Toolbar>
          <View style={styles.toolbar}>
            <Text>I'm a custom toolbar </Text>
          </View>
        </MediaControls.Toolbar>
      </MediaControls>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 250,
    width: '100%',
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});

export default App;
