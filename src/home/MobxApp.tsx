import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';
import {NavigationStackProp} from 'react-navigation-stack';

class AppState {
  @observable timer: number = 0;

  // 重置计数器
  @action.bound
  resetTimer = () => {
    console.log('AppState resetTimer');
    this.timer = 0;
  };

  @action.bound
  startTimer = () => {
    setInterval(() => {
      this.timer = this.timer + 1;
    }, 1000);
  };
}

interface Props {
  navigation: NavigationStackProp<{}>;
}

@observer
export default class MobxApp extends React.Component<Props, {}> {
  appStore: AppState;

  constructor(props: Props) {
    super(props);
    this.appStore = new AppState();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>计数器的一个Mobx例子</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
          }}>
          <Text>当前的值是: {this.appStore.timer}</Text>
          <TouchableOpacity
            onPress={() => {
              this.appStore.startTimer();
            }}>
            <Text
              style={{
                backgroundColor: 'green',
                color: 'white',
                marginLeft: 30,
                fontSize: 20,
              }}>
              计时
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  welcome: {
    marginTop: 20,
    fontSize: 20,
  },
});
