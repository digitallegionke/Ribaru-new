import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Plus, Minus, Search } from 'lucide-react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function AddSaleScreen() {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Product 1', price: 100, quantity: 1 },
    { id: '2', name: 'Product 2', price: 150, quantity: 1 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const updateQuantity = (id: string, increment: boolean) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: increment ? product.quantity + 1 : Math.max(1, product.quantity - 1)
        };
      }
      return product;
    }));
  };

  const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.title}>New Sale</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666666"
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.productList}>
          {products.map((product) => (
            <View key={product.id} style={styles.productItem}>
              <View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>KES {product.price.toFixed(2)}</Text>
              </View>
              
              <View style={styles.quantityControl}>
                <TouchableOpacity 
                  onPress={() => updateQuantity(product.id, false)}
                  style={styles.quantityButton}
                >
                  <Minus size={16} color="#666666" />
                </TouchableOpacity>
                
                <Text style={styles.quantityText}>{product.quantity}</Text>
                
                <TouchableOpacity 
                  onPress={() => updateQuantity(product.id, true)}
                  style={styles.quantityButton}
                >
                  <Plus size={16} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalAmount}>KES {total.toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.checkoutButton}
          onPress={() => {
            // Handle checkout
            router.back();
          }}
        >
          <Text style={styles.checkoutButtonText}>Complete Sale</Text>
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
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
    borderRadius: 12,
    paddingHorizontal: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  productList: {
    gap: 12,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
  },
  productName: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontFamily: 'Recursive',
    color: '#000000',
    minWidth: 24,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  totalAmount: {
    fontSize: 24,
    fontFamily: 'Recursive',
    color: '#000000',
  },
  checkoutButton: {
    backgroundColor: '#0029FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
});
