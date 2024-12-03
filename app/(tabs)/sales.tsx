import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Plus, ChevronRight } from 'lucide-react-native';
import { Link } from 'expo-router';

interface Sale {
  id: string;
  date: string;
  amount: number;
  items: number;
  status: 'completed' | 'pending' | 'cancelled';
}

import SalesScreen from '../screens/SalesScreen';
export default SalesScreen;

// const SalesScreen = () => {
//   const [sales] = useState<Sale[]>([
//     {
//       id: '1',
//       date: '2024-01-20',
//       amount: 150.00,
//       items: 3,
//       status: 'completed'
//     },
//     {
//       id: '2',
//       date: '2024-01-19',
//       amount: 75.50,
//       items: 2,
//       status: 'completed'
//     }
//   ]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Sales</Text>
//         <Link href="/add-sale" asChild>
//           <TouchableOpacity style={styles.addButton}>
//             <Plus size={20} color="#FFFFFF" />
//             <Text style={styles.addButtonText}>New Sale</Text>
//           </TouchableOpacity>
//         </Link>
//       </View>

//       <View style={styles.statsRow}>
//         <View style={styles.statsCard}>
//           <Text style={styles.statsAmount}>1,250</Text>
//           <Text style={styles.statsLabel}>TOTAL SALES</Text>
//         </View>

//         <View style={styles.statsCard}>
//           <Text style={styles.statsAmount}>45</Text>
//           <Text style={styles.statsLabel}>TOTAL ORDERS</Text>
//         </View>

//         <View style={styles.statsCard}>
//           <Text style={styles.statsAmount}>27.80</Text>
//           <Text style={styles.statsLabel}>AVG. ORDER VALUE</Text>
//         </View>
//       </View>

//       <Text style={styles.sectionTitle}>Recent Sales</Text>

//       <ScrollView style={styles.salesList} showsVerticalScrollIndicator={false}>
//         {sales.map((sale) => (
//           <TouchableOpacity key={sale.id} style={styles.saleItem}>
//             <View>
//               <Text style={styles.saleDate}>
//                 {new Date(sale.date).toLocaleDateString()}
//               </Text>
//               <Text style={styles.saleItems}>{sale.items} items</Text>
//             </View>
            
//             <View style={styles.saleRight}>
//               <View>
//                 <Text style={styles.saleCurrency}>KES</Text>
//                 <Text style={styles.saleAmount}>{sale.amount.toFixed(2)}</Text>
//               </View>
//               <ChevronRight size={20} color="#000" />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5FF',
//     padding: 16,
//     paddingTop: 60,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: 'AlbertSans-Medium',
//     color: '#000000',
//   },
//   addButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#0029FF',
//     borderRadius: 12,
//     padding: 12,
//     gap: 8,
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontFamily: 'AlbertSans-Medium',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 32,
//   },
//   statsCard: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 16,
//     alignItems: 'center',
//   },
//   statsAmount: {
//     fontSize: 24,
//     fontFamily: 'Recursive',
//     color: '#000000',
//     marginBottom: 4,
//   },
//   statsLabel: {
//     fontSize: 10,
//     fontFamily: 'AlbertSans-Medium',
//     color: '#666666',
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontFamily: 'AlbertSans-Medium',
//     color: '#000000',
//     marginBottom: 16,
//   },
//   salesList: {
//     flex: 1,
//   },
//   saleItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   saleDate: {
//     fontSize: 16,
//     fontFamily: 'AlbertSans-Medium',
//     color: '#000000',
//     marginBottom: 4,
//   },
//   saleItems: {
//     fontSize: 14,
//     fontFamily: 'AlbertSans-Regular',
//     color: '#666666',
//   },
//   saleRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   saleCurrency: {
//     fontSize: 12,
//     fontFamily: 'AlbertSans-Regular',
//     color: '#666666',
//     textAlign: 'right',
//   },
//   saleAmount: {
//     fontSize: 18,
//     fontFamily: 'Recursive',
//     color: '#000000',
//     textAlign: 'right',
//   },
// });
