import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Theme } from '@/constants/Theme';

type CommentThreadProps = {
  firstCommentImage: ImageSourcePropType;
  secondCommentImage: ImageSourcePropType;
};

export function CommentThread({ firstCommentImage, secondCommentImage }: CommentThreadProps) {
  const firstImageSize = 14;
  const secondImageSize = 22;
  const verticalLineCenter = Theme.spacing.md + 16;
  const firstImageLeft = verticalLineCenter - (firstImageSize / 2);
  const secondImageLeft = verticalLineCenter - (secondImageSize / 2);
  const horizontalOffset = 0;
  const firstImageMarginBottom = Theme.spacing.xs;
  const secondImageMarginBottom = 0;

  return (
    <View style={styles.container}>
      <View style={[
        styles.commentItem,
        {
          paddingLeft: firstImageLeft + horizontalOffset,
          marginBottom: firstImageMarginBottom,
        }
      ]}>
        <Image
          source={firstCommentImage}
          style={[styles.profileImage, styles.firstImage, { width: firstImageSize, height: firstImageSize, borderRadius: firstImageSize / 2 }]}
          resizeMode="cover"
        />
      </View>

      <View style={[
        styles.commentItem,
        {
          paddingLeft: secondImageLeft + horizontalOffset,
          marginBottom: secondImageMarginBottom,
        }
      ]}>
        <Image
          source={secondCommentImage}
          style={[styles.profileImage, styles.secondImage, { width: secondImageSize, height: secondImageSize, borderRadius: secondImageSize / 2 }]}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: Theme.spacing.md,
    position: 'relative',
    paddingLeft: 0,
  },
  commentItem: {
    position: 'relative',
  },
  profileImage: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  firstImage: {
  },
  secondImage: {
  },
  horizontalLine: {
    position: 'absolute',
    height: 1,
    backgroundColor: '#E0E0E0',
    zIndex: 1,
  },
});

