import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#111',     // dark icon when active (like mock)
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: [
          styles.tabBar,
          Platform.select({ ios: { position: 'absolute' }, android: { height: 56 }, default: {} }),
        ],
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color as string} size={size ?? 22} />
          ),
        }}
      />

      {/* Search */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color as string} size={size ?? 22} />
          ),
        }}
      />

      {/* Add */}
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color as string} size={(size ?? 22) + 2} />
          ),
        }}
      />

      {/* Activity (heart) */}
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color as string} size={size ?? 22} />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color as string} size={size ?? 22} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#e6e6e6',
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 0,
  },
});
