import React from 'react';
import { View, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import {
  Header,
  StoryItem,
  PostCard,
  BottomTabBar,
  STORIES,
  POSTS,
  styles,
} from '../../components/feed';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Stories Row */}
        <View style={styles.storiesDivider} />
        <FlatList
          data={STORIES}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StoryItem story={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
        <View style={styles.storiesDivider} />

        {/* Feed Posts */}
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        <View style={styles.bottomPadding} />
      </ScrollView>

      <BottomTabBar />
    </SafeAreaView>
  );
}
