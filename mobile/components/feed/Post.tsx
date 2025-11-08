import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { PostHeader } from './PostHeader';
import { PostEngagement } from './PostEngagement';
import { CommentThread } from './CommentThread';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type PostProps = {
  id: string;
  profileImage: ImageSourcePropType;
  username: string;
  isVerified?: boolean;
  flagIcon?: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  firstCommentImage?: ImageSourcePropType;
  secondCommentImage?: ImageSourcePropType;
  spacerHeight?: number;
  useSamePadding?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onSend?: () => void;
  onMorePress?: () => void;
};

export function Post({
  profileImage,
  username,
  isVerified,
  flagIcon,
  timeAgo,
  content,
  likes,
  comments,
  isLiked,
  firstCommentImage,
  secondCommentImage,
  spacerHeight,
  useSamePadding = false,
  onLike,
  onComment,
  onShare,
  onSend,
  onMorePress,
}: PostProps) {
  const hasCommentThread = firstCommentImage && secondCommentImage;

  return (
    <View style={styles.container}>
      {hasCommentThread && <View style={styles.verticalLine} />}
      
      <PostHeader
        profileImage={profileImage}
        username={username}
        isVerified={isVerified}
        flagIcon={flagIcon}
        timeAgo={timeAgo}
        onMorePress={onMorePress}
      />
      
      <View style={[
        styles.contentContainer,
        !hasCommentThread && !useSamePadding && styles.contentContainerNoLine,
        useSamePadding && styles.contentContainerSamePadding
      ]}>
        <Text style={styles.content}>{content}</Text>
      </View>
      
      <View style={[styles.spacer, spacerHeight !== undefined && { height: spacerHeight }]} />
      
      <View style={styles.engagementRow}>
        {hasCommentThread && (
          <View style={styles.commentThreadContainer}>
            <CommentThread
              firstCommentImage={firstCommentImage}
              secondCommentImage={secondCommentImage}
            />
          </View>
        )}
        
        <View style={[
          styles.engagementContainer,
          !hasCommentThread && !useSamePadding && styles.engagementContainerNoLine,
          useSamePadding && styles.engagementContainerSamePadding
        ]}>
          <PostEngagement
            likes={likes}
            comments={comments}
            isLiked={isLiked}
            onLike={onLike}
            onComment={onComment}
            onShare={onShare}
            onSend={onSend}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: FeedColors.background,
    paddingBottom: Theme.spacing.md,
    position: 'relative',
  },
  verticalLine: {
    position: 'absolute',
    left: Theme.spacing.md + 16,
    top: Theme.spacing.sm + 32,
    bottom: Theme.spacing.sm + 60,
    width: 1,
    backgroundColor: '#E0E0E0',
    zIndex: 0,
  },
  contentContainer: {
    paddingLeft: Theme.spacing.md + 30 + Theme.spacing.md,
    paddingRight: Theme.spacing.md,
    paddingTop: -Theme.spacing.sm,
    paddingBottom: Theme.spacing.sm,
  },
  contentContainerNoLine: {
    paddingLeft: Theme.spacing.md,
  },
  contentContainerSamePadding: {
    paddingLeft: Theme.spacing.md + 30 + Theme.spacing.md,
  },
  content: {
    fontSize: Theme.fontSize.md,
    color: FeedColors.text,
    lineHeight: Theme.fontSize.md * 1.5,
  },
  spacer: {
    height: Theme.spacing.xxxl * 7,
  },
  engagementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
  },
  commentThreadContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  engagementContainer: {
    flex: 1,
    marginLeft: Theme.spacing.md + -10 + Theme.spacing.md,
  },
  engagementContainerNoLine: {
    marginLeft: 0,
  },
  engagementContainerSamePadding: {
    marginLeft: Theme.spacing.md + -10 + Theme.spacing.md,
  },
});

