import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Bell, Plus, Search, ChevronRight } from 'lucide-react-native';
import { Link } from 'expo-router';

interface SaleItemProps {
  title: string;
  items: number;
  amount: string;
}

const SaleItem = ({ title, items, amount }: SaleItemProps) => (
  <Link href="/sales" asChild>
    <TouchableOpacity style={styles.saleItem}>
      <View>
        <Text style={styles.saleItemTitle}>{title}</Text>
        <Text style={styles.saleItemSubtitle}>{items} Items</Text>
      </View>
      <View style={styles.saleItemRight}>
        <View>
          <Text style={styles.saleItemCurrency}>KES</Text>
          <Text style={styles.saleItemAmount}>{amount}</Text>
        </View>
        <ChevronRight size={20} color="#000" />
      </View>
    </TouchableOpacity>
  </Link>
);

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ribaru</Text>
        <TouchableOpacity>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statsCard}>
          <Text style={styles.statsLabel}>TODAY'S SALES</Text>
          <View style={styles.statsContent}>
            <Text style={styles.statsAmount}>16,788</Text>
            <Text style={styles.statsCurrency}>KES</Text>
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsLabel}>SALES THIS WEEK</Text>
          <View style={styles.statsContent}>
            <Text style={styles.statsAmount}>45,850</Text>
            <Text style={styles.statsCurrency}>KES</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <Link href="/add-stock" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Plus size={20} color="#0029FF" />
            <Text style={styles.actionButtonText}>Add Stock</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/search-barcode" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Search size={20} color="#0029FF" />
            <Text style={styles.actionButtonText}>Search with Barcode</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Recent Sales</Text>

      <ScrollView style={styles.salesList} showsVerticalScrollIndicator={false}>
        <SaleItem 
          title="Indian style curry paste"
          items={3}
          amount="2,400.00"
        />
        <SaleItem
          title="Granola"
          items={8}
          amount="8,500.00"
        />
        <SaleItem
          title="Trail Mix"
          items={8}
          amount="1,800.00"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#0029FF',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  statsLabel: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: '#666666',
    marginBottom: 8,
  },
  statsContent: {
    gap: 4,
  },
  statsAmount: {
    fontSize: 32,
    fontFamily: 'Recursive',
    color: '#000000',
  },
  statsCurrency: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#0029FF',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 16,
  },
  salesList: {
    flex: 1,
  },
  saleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  saleItemTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  saleItemSubtitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  saleItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  saleItemCurrency: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    textAlign: 'right',
  },
  saleItemAmount: {
    fontSize: 18,
    fontFamily: 'Recursive',
    color: '#000000',
    textAlign: 'right',
  },
});
