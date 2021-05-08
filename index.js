import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import MainApp from './src/main/MainApp';
import AuthApp from './src/login/AuthApp';
// import AuthApp from './src/login/AuthApp';

AppRegistry.registerComponent('MyApp', () => MainApp);
