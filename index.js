/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => App);



import { store } from './src/Redux/app/store'
import { Provider } from 'react-redux'
// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
const RNRedux = () => (
  <GestureHandlerRootView style={{flex:1}}>
    <Provider store = { store }>
      <App />
    </Provider></GestureHandlerRootView>
  )
   AppRegistry.registerComponent(appName, () => RNRedux);
