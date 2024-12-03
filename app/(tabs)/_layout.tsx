import { Tabs } from 'expo-router';
import { Home, ShoppingCart, Package, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          height: 64,
          paddingVertical: 12,
        },
        tabBarActiveTintColor: '#0029FF',
        tabBarInactiveTintColor: '#666666',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: 'Sales',
          tabBarIcon: ({ color }) => <ShoppingCart size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stocks"
        options={{
          title: 'Stocks',
          tabBarIcon: ({ color }) => <Package size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}