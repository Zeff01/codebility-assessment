import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StoryItem } from './StoryItem';
import { FeedColors } from '@/constants/FeedColors';
import { Theme } from '@/constants/Theme';

type Story = {
  id: string;
  name: string;
  image: any;
  isLive?: boolean;
  hasNewStories?: boolean;
};

type StoriesSectionProps = {
  stories: Story[];
};

export function StoriesSection({ stories }: StoriesSectionProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            name={story.name}
            image={story.image}
            isLive={story.isLive}
            hasNewStories={story.hasNewStories}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: FeedColors.border,
    paddingVertical: Theme.spacing.md,
  },
  scrollContent: {
    paddingHorizontal: Theme.spacing.md,
  },
});

