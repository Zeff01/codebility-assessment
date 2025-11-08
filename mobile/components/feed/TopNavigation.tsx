import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type TopNavigationProps = {
  onCameraPress?: () => void;
  onTvPress?: () => void;
  onMessagePress?: () => void;
};

export function TopNavigation({ onCameraPress, onTvPress, onMessagePress }: TopNavigationProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCameraPress} style={styles.iconButton}>
        <Ionicons name="camera-outline" size={24} color={FeedColors.icon} />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/Instagram_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onTvPress} style={styles.iconButton}>
          <View style={styles.tvIconContainer}>
            {/* Using Watch_icon.png image instead of library icon - Instagram TV icon design not available in @expo/vector-icons */}
            <Image
              source={require('@/assets/images/Watch_icon.png')}
              style={styles.tvIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMessagePress} style={styles.iconButton}>
          <Ionicons name="paper-plane-outline" size={24} color={FeedColors.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: FeedColors.border,
    backgroundColor: FeedColors.navigationBackground,
  },
  iconButton: {
    padding: Theme.spacing.xs,
  },
  logo: {
    width: 120,
    height: 40,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tvIconContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tvIcon: {
    width: 24,
    height: 24,
  },
});

