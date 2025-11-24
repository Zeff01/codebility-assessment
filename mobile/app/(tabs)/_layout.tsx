import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // changed the active tint color to black to match the image test
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        // hiding the labels
        tabBarShowLabel: false, 
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
        {/* changed the icon images to match the image test icons */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
          <Image
          source={require('@/assets/home.png')}
          style={{ width: 28, height: 26, tintColor: color }}
          />
        ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
          <Image
          source={require('@/assets/search.png')}
          style={{ width: 26, height: 26, tintColor: color }}
          />
        ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color }) => (
          <Image
          source={require('@/assets/plus.png')}
          style={{ width: 24, height: 24, tintColor: color, borderWidth: 2, borderColor: color, borderRadius: 5 }}
          />
        ),
        }}
      />
      <Tabs.Screen
        name="notif"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => (
          <Image
          source={require('@/assets/heart.png')}
          style={{ width: 28, height: 28, tintColor: color }}
          />
        ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
          <Image
          source={require('@/assets/person.png')}
          style={{ width: 26, height: 26, tintColor: color }}
          />
        ),
        }}
      />
    </Tabs>
  );
}
