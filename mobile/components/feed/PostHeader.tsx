import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type PostHeaderProps = {
  profileImage: ImageSourcePropType;
  username: string;
  isVerified?: boolean;
  flagIcon?: string;
  timeAgo: string;
  onMorePress?: () => void;
};

export function PostHeader({
  profileImage,
  username,
  isVerified = false,
  flagIcon,
  timeAgo,
  onMorePress,
}: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={profileImage} style={styles.profileImage} resizeMode="cover" />
        <View style={styles.userInfo}>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>{username}</Text>
            {isVerified && (
              <>
                {/* Using verified_icon.png image instead of library icon - Instagram-style verified badge design not available in @expo/vector-icons */}
                <Image
                  source={require('@/assets/images/verified_icon.png')}
                  style={styles.verifiedBadge}
                  resizeMode="contain"
                />
              </>
            )}
            {flagIcon && (
              <View style={styles.flagContainer}>
                <Text style={styles.flag}>{flagIcon}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
        <TouchableOpacity onPress={onMorePress} style={styles.moreButton}>
          <Text style={styles.moreIcon}>⋯</Text>
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
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: Theme.spacing.sm,
  },
  userInfo: {
    flex: 1,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: Theme.fontSize.md,
    fontWeight: '600',
    color: FeedColors.username,
    marginRight: Theme.spacing.xs,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    marginRight: Theme.spacing.xs,
  },
  flagContainer: {
    marginLeft: Theme.spacing.xs,
  },
  flag: {
    fontSize: Theme.fontSize.md,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAgo: {
    fontSize: Theme.fontSize.sm,
    color: FeedColors.textSecondary,
    marginRight: Theme.spacing.sm,
  },
  moreButton: {
    padding: Theme.spacing.xs,
  },
  moreIcon: {
    fontSize: Theme.fontSize.lg,
    color: FeedColors.text,
    fontWeight: 'bold',
  },
});

