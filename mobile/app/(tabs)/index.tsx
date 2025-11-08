import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { TopNavigation } from '@/components/feed/TopNavigation';
import { StoriesSection } from '@/components/feed/StoriesSection';
import { Post } from '@/components/feed/Post';
import { BottomNavigation } from '@/components/feed/BottomNavigation';
import { FeedColors } from '@/constants/FeedColors';

// Mock data
const mockStories = [
  { id: '1', name: 'Jeanne', image: require('@/assets/profile/jeanne.jpg'), hasNewStories: true },
  { id: '2', name: 'Julia', image: require('@/assets/profile/julia.jpg'), isLive: true, hasNewStories: true },
  { id: '3', name: 'Brinda', image: require('@/assets/profile/brinda.jpg'), hasNewStories: true },
  { id: '4', name: 'John', image: require('@/assets/profile/john.jpg'), hasNewStories: true },
  { id: '5', name: 'Shui', image: require('@/assets/profile/shui.jpeg'), hasNewStories: true },
];

const mockPosts = [
  {
    id: '1',
    profileImage: require('@/assets/profile/terrance.png'),
    username: 'Terrance Mertz',
    isVerified: true,
    flagIcon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    timeAgo: '8 min',
    content:
      'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus soleo crudelis quis ex.',
    likes: 720,
    comments: 60,
    isLiked: false,
    firstCommentImage: require('@/assets/profile/jeanne.jpg'),
    secondCommentImage: require('@/assets/profile/julia.jpg'),
  },
  {
    id: '2',
    profileImage: require('@/assets/profile/Anabel.jpg'),
    username: 'Anabel Stracke',
    flagIcon: '🇬🇧',
    timeAgo: '3 hrs',
    content: 'Voritos cruv thoologus sol proosontium',
    likes: 450,
    comments: 32,
    isLiked: false,
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleBottomNavPress = (tab: 'home' | 'search' | 'add' | 'activity' | 'profile') => {
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StoriesSection stories={mockStories} />
        {mockPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            profileImage={post.profileImage}
            username={post.username}
            isVerified={post.isVerified}
            flagIcon={post.flagIcon}
            timeAgo={post.timeAgo}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            isLiked={likedPosts.has(post.id)}
            firstCommentImage={post.firstCommentImage}
            secondCommentImage={post.secondCommentImage}
            spacerHeight={post.id === '2' ? 20 : undefined}
            useSamePadding={post.id === '2'}
            onLike={() => handleLike(post.id)}
          />
        ))}
      </ScrollView>
      <BottomNavigation
        activeTab="home"
        onHomePress={() => handleBottomNavPress('home')}
        onSearchPress={() => handleBottomNavPress('search')}
        onAddPress={() => handleBottomNavPress('add')}
        onActivityPress={() => handleBottomNavPress('activity')}
        onProfilePress={() => handleBottomNavPress('profile')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FeedColors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
