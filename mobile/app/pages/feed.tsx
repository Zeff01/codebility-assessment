import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { router, Stack } from 'expo-router';
import Stories from '@/components/Stories';
import Post from '@/components/Post';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

export default function FeedScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <FeedContent />
    </>
  );
}

function FeedContent() {
  const posts = [
    {
      id: 1,
      username: 'Terrance Mertz',
      avatar: require('@/assets/images/1.png'),
      isVerified: true,
      hasFlag: true,
      timeAgo: '8 min',
      content: 'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus soleo crudelis quis ex.',
      likes: '720',
      comments: '60'
    },
    {
      id: 2,
      username: 'Anabel Stracke',
      avatar: require('@/assets/images/2.png'),
      hasFlag: true,
      timeAgo: '3 hrs',
      content: 'Veritas cruv thoologus sol proosontium.',
      likes: '456',
      comments: '23'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.feedContainer}>
      <Header />
      
      <Stories />
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            isVerified={post.isVerified}
            hasFlag={post.hasFlag}
            timeAgo={post.timeAgo}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </ScrollView>
      
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  feedContainer: {
    flex: 1,
  },
}); 