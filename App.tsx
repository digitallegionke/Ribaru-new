import { View } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import {
  AlbertSans_400Regular,
  AlbertSans_500Medium,
} from '@expo-google-fonts/albert-sans';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts({
    'AlbertSans-Regular': AlbertSans_400Regular,
    'AlbertSans-Medium': AlbertSans_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F6FF' }} onLayout={onLayoutRootView}>
      <ExpoRoot context={require('./app')} />
    </View>
  );
}