import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Settings as SettingsIcon, Store, Users, Bell, LogOut, ChevronRight } from 'lucide-react-native';

const menuItems = [
  {
    icon: Store,
    title: 'Business Profile',
    description: 'Manage your business details',
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Add and manage staff accounts',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure notification settings',
  },
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.iconContainer}>
                  <item.icon size={20} color="#0029FF" />
                </View>
                <View>
                  <Text style={styles.menuItemTitle}>{item.title}</Text>
                  <Text style={styles.menuItemDescription}>{item.description}</Text>
                </View>
              </View>
              <ChevronRight size={20} color="#666666" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#FF0000" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#FF0000',
  },
});
