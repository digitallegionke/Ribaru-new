import { registerRootComponent } from 'expo';
import { App } from './App';
import 'expo-router/entry';
import { LogBox } from 'react-native';

// Suppress the screen capture permission warning for now
LogBox.ignoreLogs([
  'Exception in HostObject::get for prop',
  'Permission Denial: registerScreenCaptureObserver'
]);

registerRootComponent(App);