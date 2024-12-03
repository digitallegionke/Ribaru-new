import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Plus, Search, ChevronRight, ArrowLeft } from 'lucide-react-native';

interface StockItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
}

export default function StocksScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [stocks] = useState<StockItem[]>([
    {
      id: '1',
      name: 'Product 1',
      quantity: 50,
      price: 100,
      category: 'Category A',
    },
    {
      id: '2',
      name: 'Product 2',
      quantity: 30,
      price: 150,
      category: 'Category B',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Stock</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search stocks..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#666666"
          />
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statsCard}>
          <Text style={styles.statsAmount}>150</Text>
          <Text style={styles.statsLabel}>TOTAL ITEMS</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsAmount}>12</Text>
          <Text style={styles.statsLabel}>LOW STOCK</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsAmount}>5</Text>
          <Text style={styles.statsLabel}>OUT OF STOCK</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.stockList}>
          {stocks.map((stock) => (
            <TouchableOpacity key={stock.id} style={styles.stockItem}>
              <View>
                <Text style={styles.stockName}>{stock.name}</Text>
                <Text style={styles.stockCategory}>{stock.category}</Text>
              </View>
              
              <View style={styles.stockRight}>
                <View>
                  <Text style={styles.stockQuantityLabel}>Quantity</Text>
                  <Text style={styles.stockQuantity}>{stock.quantity}</Text>
                </View>
                <ChevronRight size={20} color="#666666" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Link href="/add-stock" asChild>
        <TouchableOpacity style={styles.bottomButton}>
          <Plus size={24} color="#FFFFFF" />
          <Text style={styles.bottomButtonText}>Add Stock</Text>
        </TouchableOpacity>
      </Link>
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
    paddingBottom: 24,
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
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    margin: 16,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statsAmount: {
    fontSize: 24,
    fontFamily: 'Recursive',
    color: '#000000',
    marginBottom: 4,
  },
  statsLabel: {
    fontSize: 10,
    fontFamily: 'AlbertSans-Medium',
    color: '#666666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  stockList: {
    paddingVertical: 16,
    gap: 12,
  },
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
  },
  stockName: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  stockCategory: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  stockRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stockQuantityLabel: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    textAlign: 'right',
  },
  stockQuantity: {
    fontSize: 18,
    fontFamily: 'Recursive',
    color: '#000000',
    textAlign: 'right',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#0029FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
  },
});
