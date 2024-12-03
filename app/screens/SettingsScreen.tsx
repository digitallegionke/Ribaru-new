import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Settings, Store, Users, CreditCard, UserCircle } from 'lucide-react-native';

interface SettingsOption {
  title: string;
  path: string;
  icon: React.ReactNode;
  description: string;
}

export function SettingsScreen() {
  const router = useRouter();
  const settingsOptions: SettingsOption[] = [
    { 
      title: 'Business Profile',
      path: '/settings/business',
      icon: <Store size={24} color="#0029FF" />,
      description: 'Manage your business details and preferences'
    },
    { 
      title: 'User Management',
      path: '/users',
      icon: <Users size={24} color="#0029FF" />,
      description: 'Add and manage staff accounts'
    },
    { 
      title: 'Profile Settings',
      path: '/settings/profile',
      icon: <UserCircle size={24} color="#0029FF" />,
      description: 'Update your personal information'
    },
    { 
      title: 'POS Setup',
      path: '/settings/pos',
      icon: <CreditCard size={24} color="#0029FF" />,
      description: 'Configure your point of sale settings'
    },
    { 
      title: 'Account Settings',
      path: '/settings/account',
      icon: <Settings size={24} color="#0029FF" />,
      description: 'Manage your account preferences'
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.optionsContainer}>
          {settingsOptions.map((option, index) => (
            <Link href={option.path} asChild key={index}>
              <TouchableOpacity style={styles.optionCard}>
                <View style={styles.optionIcon}>
                  {option.icon}
                </View>
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.signOutButton}
        onPress={() => {
          // Add sign out logic here
          router.replace('/');
        }}
      >
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
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
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEBFF',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  content: {
    flex: 1,
  },
  optionsContainer: {
    padding: 16,
    gap: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  signOutButton: {
    margin: 16,
    marginBottom: 32,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  signOutButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
});
