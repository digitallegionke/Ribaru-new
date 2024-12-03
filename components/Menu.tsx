import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as MCIcon } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import type { MaterialCommunityIcons } from '@expo/vector-icons';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface MenuItem {
  icon: IconName;
  label: string;
  href: string;
}

export default function Menu() {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Home',
      href: '/',
    },
    {
      icon: 'cart',
      label: 'Sales',
      href: '/sales',
    },
    {
      icon: 'package-variant',
      label: 'Stocks',
      href: '/stocks',
    },
    {
      icon: 'cog',
      label: 'Settings',
      href: '/settings',
    },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MCIcon 
                name={item.icon} 
                size={24} 
                color={isActive ? '#1939FF' : '#5C5C5C'} 
              />
              <Text style={[
                styles.menuText,
                isActive && styles.activeText
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 74,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(25, 57, 255, 0.1)',
    paddingBottom: 8,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 4,
  },
  menuText: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 12,
    color: '#5C5C5C',
    letterSpacing: -0.4,
  },
  activeText: {
    color: '#1939FF',
  }
});
