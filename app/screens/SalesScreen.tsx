import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons as MCIcon } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

interface SaleItemProps {
  id: string;
  items: number;
  amount: string;
  time: string;
}

const SaleItem: React.FC<SaleItemProps> = ({ id, items, amount, time }) => (
  <TouchableOpacity style={styles.saleItem}>
    <View style={styles.saleInfo}>
      <Text style={styles.saleId}>{id}</Text>
      <Text style={styles.saleTime}>{time}</Text>
    </View>
    <View style={styles.saleDetails}>
      <Text style={styles.saleItems}>{items} items</Text>
      <Text style={styles.saleAmount}>KES {amount}</Text>
    </View>
    <TouchableOpacity style={styles.viewButton}>
      <Text style={styles.viewButtonText}>View Details</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const SalesScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Sample data - replace with actual data later
  const sampleSales = [
    { id: 'SALE001', items: 3, amount: '2,500', time: '10:30 AM' },
    { id: 'SALE002', items: 1, amount: '800', time: '11:45 AM' },
    { id: 'SALE003', items: 5, amount: '4,200', time: '2:15 PM' },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sales</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>Today's Sales</Text>
            <Text style={styles.statsValue}>KES 7,500</Text>
            <Text style={styles.statsSubtext}>9 sales</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>This Week</Text>
            <Text style={styles.statsValue}>KES 52,300</Text>
            <Text style={styles.statsSubtext}>43 sales</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Sales</Text>
          {sampleSales.map((sale) => (
            <SaleItem key={sale.id} {...sale} />
          ))}
        </View>
      </ScrollView>

      <Link href="/add-sale" asChild>
        <TouchableOpacity style={styles.bottomButton}>
          <MCIcon name="plus" size={24} color="#FFF" />
          <Text style={styles.bottomButtonText}>New Sale</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEBFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    gap: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#1A1A1A',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
  },
  statsLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'AlbertSans-Medium',
  },
  statsValue: {
    fontSize: 24,
    color: '#1A1A1A',
    fontFamily: 'Recursive',
  },
  statsSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    fontFamily: 'AlbertSans-Regular',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 4,
    fontFamily: 'AlbertSans-Medium',
  },
  saleItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  saleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saleId: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: 'AlbertSans-Medium',
  },
  saleTime: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'AlbertSans-Regular',
  },
  saleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saleItems: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'AlbertSans-Regular',
  },
  saleAmount: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: 'Recursive',
  },
  viewButton: {
    backgroundColor: '#F3F4FF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#1939FF',
    fontFamily: 'AlbertSans-Medium',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#1939FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  bottomButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
  },
});

export default SalesScreen;
