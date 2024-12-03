import { View, Text } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import {
  AlbertSans_400Regular,
  AlbertSans_500Medium,
} from '@expo-google-fonts/albert-sans';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'AlbertSans-Regular': AlbertSans_400Regular,
    'AlbertSans-Medium': AlbertSans_500Medium,
  });

  useEffect(() => {
    if (fontError) {
      console.error('Error loading fonts:', fontError);
    }
  }, [fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6FF', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F6FF' }} onLayout={onLayoutRootView}>
      <ExpoRoot context={require('./app')} />
    </View>
  );
}