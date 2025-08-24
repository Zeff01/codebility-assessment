import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';
import { CircleUserRound } from 'lucide-react-native';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#8e8e8e",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: { position: "absolute" },
          default: {},
        }),
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={26}
              color={focused ? "#000" : "#8e8e8e"}
            />
          ),
        }}
      />

      {/* Search */}
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="magnifying-glass"
              size={26}
              color={focused ? "#000" : "#8e8e8e"}
            />
          ),
        }}
      />

      {/* Add Post */}
      <Tabs.Screen
        name="plus"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="squared-plus"
              size={26}
              color={focused ? "#000" : "#8e8e8e"}
            />
          ),
        }}
      />

      {/* Favorites */}
      <Tabs.Screen
        name="heart"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="heart"
              size={26}
              color={focused ? "#000" : "#8e8e8e"}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <CircleUserRound
              size={26}
              color={focused ? "#000" : "#8e8e8e"}
              strokeWidth={focused ? 2.5 : 1.5}
            />
          ),
        }}
      />
    </Tabs>
  );
}
