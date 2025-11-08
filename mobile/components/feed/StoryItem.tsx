import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type StoryItemProps = {
  name: string;
  image: ImageSourcePropType;
  isLive?: boolean;
  hasNewStories?: boolean;
};

export function StoryItem({ name, image, isLive = false, hasNewStories = true }: StoryItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={[styles.imageContainer, hasNewStories && styles.imageContainerActive]}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        {isLive && (
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>LIVE</Text>
          </View>
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: Theme.spacing.md,
    width: 70,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: FeedColors.storyBorderInactive,
    padding: 2,
    marginBottom: Theme.spacing.xs,
  },
  imageContainerActive: {
    borderColor: FeedColors.storyBorderActive,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  liveBadge: {
    position: 'absolute',
    bottom: -2,
    left: '50%',
    transform: [{ translateX: -20 }],
    backgroundColor: FeedColors.liveBadge,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingHorizontal: Theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveBadgeText: {
    color: FeedColors.liveBadgeText,
    fontSize: Theme.fontSize.sm - 2,
    fontWeight: 'bold',
  },
  name: {
    fontSize: Theme.fontSize.sm,
    color: FeedColors.text,
    textAlign: 'center',
  },
});

