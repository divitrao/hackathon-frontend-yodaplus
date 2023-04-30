import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, {
  asyncStorage,
  openInEditor,
  networking,
  trackGlobalErrors,
} from 'reactotron-react-native';

Reactotron.configure({name: 'app_name'})
  .use(networking())
  .use(reactotronRedux())
  .use(openInEditor())
  .use(trackGlobalErrors())
  .useReactNative()
  .connect();

//  patch console.log to send log to reactotron

export default Reactotron;
