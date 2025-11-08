import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type BottomNavigationProps = {
  activeTab?: 'home' | 'search' | 'add' | 'activity' | 'profile';
  onHomePress?: () => void;
  onSearchPress?: () => void;
  onAddPress?: () => void;
  onActivityPress?: () => void;
  onProfilePress?: () => void;
};

export function BottomNavigation({
  activeTab = 'home',
  onHomePress,
  onSearchPress,
  onAddPress,
  onActivityPress,
  onProfilePress,
}: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onHomePress}
        style={styles.iconButton}
        activeOpacity={0.7}
      >
        <Ionicons
          name="home"
          size={28}
          color={activeTab === 'home' ? FeedColors.iconActive : FeedColors.iconInactive}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSearchPress}
        style={styles.iconButton}
        activeOpacity={0.7}
      >
        <Ionicons
          name="search-outline"
          size={28}
          color={activeTab === 'search' ? FeedColors.iconActive : FeedColors.iconInactive}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onAddPress}
        style={styles.iconButton}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.addIconContainer,
            activeTab === 'add' && styles.addIconContainerActive,
          ]}
        >
          <Ionicons
            name="add"
            size={24}
            color="#000000"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onActivityPress}
        style={styles.iconButton}
        activeOpacity={0.7}
      >
        <Ionicons
          name="heart-outline"
          size={28}
          color={activeTab === 'activity' ? FeedColors.iconActive : FeedColors.iconInactive}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onProfilePress}
        style={styles.iconButton}
        activeOpacity={0.7}
      >
        {/* Using profile_icon.png image instead of library icon - specific profile icon design not available in @expo/vector-icons */}
        <Image
          source={require('@/assets/images/profile_icon.png')}
          style={styles.profileIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.xl,
    paddingVertical: Theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: FeedColors.border,
    backgroundColor: FeedColors.navigationBackground,
    paddingBottom: Theme.spacing.md,
  },
  iconButton: {
    padding: Theme.spacing.xs / 2,
  },
  addIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconContainerActive: {
    borderColor: '#000000',
  },
  profileIcon: {
    width: 28,
    height: 28,
  },
});

