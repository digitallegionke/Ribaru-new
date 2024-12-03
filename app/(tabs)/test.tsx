import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000000',
  },
});
