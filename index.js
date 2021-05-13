import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Auth from './screens/AuthStack'
import {name as appName} from './app.json';

console.disableYellowBox= true;

AppRegistry.registerComponent(appName, () => App);
