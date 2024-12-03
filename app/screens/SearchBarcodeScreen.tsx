import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Scan } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SearchBarcodeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.title}>Scan Barcode</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.scanArea}>
          <Scan size={48} color="#0029FF" />
          <Text style={styles.scanText}>Position barcode within frame to scan</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.manualButton} onPress={() => router.push('/add-stock')}>
          <Text style={styles.manualButtonText}>Enter Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    gap: 16,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scanArea: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  scanText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    textAlign: 'center',
    maxWidth: '80%',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EAEBFF',
  },
  manualButton: {
    backgroundColor: '#F3F4FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  manualButtonText: {
    color: '#1939FF',
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
});
