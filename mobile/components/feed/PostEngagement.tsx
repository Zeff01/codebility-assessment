import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type PostEngagementProps = {
  likes: number;
  comments: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onSend?: () => void;
  isLiked?: boolean;
};

export function PostEngagement({
  likes,
  comments,
  onLike,
  onComment,
  onShare,
  onSend,
  isLiked = false,
}: PostEngagementProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={onLike} style={styles.iconButton}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={20}
            color={isLiked ? FeedColors.likeActive : FeedColors.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onComment} style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={20} color={FeedColors.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare} style={styles.iconButton}>
          <Ionicons name="repeat-outline" size={20} color={FeedColors.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSend} style={styles.iconButton}>
          <Ionicons name="paper-plane-outline" size={20} color={FeedColors.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.stats}>
          {comments} comments • {likes} likes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: Theme.spacing.md + 16 + Theme.spacing.md,
    paddingRight: Theme.spacing.md,
    paddingVertical: Theme.spacing.sm,
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.xs,
  },
  iconButton: {
    marginRight: Theme.spacing.xs,
    padding: 2,
  },
  statsRow: {
    marginTop: Theme.spacing.xs,
  },
  stats: {
    fontSize: Theme.fontSize.sm,
    color: FeedColors.textSecondary,
  },
});

