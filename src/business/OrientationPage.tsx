import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Orientation from 'react-native-orientation';
import {NavigationStackProp} from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp<{}>;
}
interface State {
  isBool: boolean;
  summary: string;
}

export default class OrientationPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isBool: Orientation.getInitialOrientation() === 'PORTRAIT', //当前是否是竖屏(true),横屏(false)
      summary: '', //描述
    };
    this._handleOnPress = this._handleOnPress.bind(this);
  }

  //生命周期函数、render渲染完成之后调用
  componentDidMount() {
    console.log(
      'OrientationPage componentDidMount' + Orientation.getInitialOrientation(),
    );
    //默认锁定为竖屏
    //Orientation.lockToPortrait();
  }

  //自定义方法
  _handleOnPress = () => {
    const isBool = this.state.isBool;
    if (isBool) {
      this.setState({
        isBool: false,
        summary: '本来是竖屏、现在锁定为横屏了....',
      });

      //竖屏时、锁定为横屏
      Orientation.lockToLandscape();
    } else {
      this.setState({
        isBool: true,
        summary: '本来是横屏、现在锁定为竖屏了....',
      });

      //横屏时、锁定为竖屏
      Orientation.lockToPortrait();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          方向:{this.state.isBool ? '竖屏' : '横屏'}
        </Text>
        <Text style={styles.welcome}>描述:{this.state.summary}</Text>

        <Button title={'切换屏幕方向'} onPress={() => this._handleOnPress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
