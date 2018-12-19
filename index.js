/** @format */
import 'babel-polyfill'
import {AppRegistry,Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import 'core-js/es6/symbol'; 
// import 'core-js/fn/symbol/iterator';
if (Platform.OS === 'android') {
    if (typeof Symbol === 'undefined') {
      if (Array.prototype['@@iterator'] === undefined) {
        Array.prototype['@@iterator'] = function() {
          let i = 0;
          return {
            next: () => ({
              done: i >= this.length,
              value: this[i++],
            }),
          };
        };
      }
    }
  }

AppRegistry.registerComponent(appName, () => App);
