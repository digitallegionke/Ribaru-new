import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

interface FormData {
  name: string;
  quantity: string;
  price: string;
  category: string;
  description: string;
}

export default function AddStockScreen() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    quantity: '',
    price: '',
    category: '',
    description: ''
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.title}>Add New Stock</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Item Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(value) => handleChange('name', value)}
              placeholder="Enter item name"
              placeholderTextColor="#666666"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={formData.quantity}
              onChangeText={(value) => handleChange('quantity', value)}
              placeholder="Enter quantity"
              placeholderTextColor="#666666"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={formData.price}
              onChangeText={(value) => handleChange('price', value)}
              placeholder="Enter price"
              placeholderTextColor="#666666"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              value={formData.category}
              onChangeText={(value) => handleChange('category', value)}
              placeholder="Enter category"
              placeholderTextColor="#666666"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.description}
              onChangeText={(value) => handleChange('description', value)}
              placeholder="Enter description"
              placeholderTextColor="#666666"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Stock</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  },
  form: {
    padding: 16,
    gap: 24,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#000000',
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  submitButton: {
    backgroundColor: '#0029FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
});
