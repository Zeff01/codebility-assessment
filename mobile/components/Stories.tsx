import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';


const stories = [
  { id: 1, name: 'Jeanne', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 2, name: 'Julia', isLive: true, avatar: require('@/assets/images/2.png') },
  { id: 3, name: 'Brinda', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 4, name: 'John', isLive: false, avatar: require('@/assets/images/2.png') },
  { id: 5, name: 'Shui', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 6, name: 'Peng', isLive: false, avatar: require('@/assets/images/2.png') },
  { id: 7, name: 'Kai', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 8, name: 'Lana', isLive: false, avatar: require('@/assets/images/2.png') },
  { id: 9, name: 'Theo', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 10, name: 'Nico', isLive: false, avatar: require('@/assets/images/2.png') },
  { id: 11, name: 'Ami', isLive: false, avatar: require('@/assets/images/1.png') },
  { id: 12, name: 'Riku', isLive: false, avatar: require('@/assets/images/2.png') },
  { id: 13, name: 'Mina', isLive: false, avatar: require('@/assets/images/1.png') },
];


export default function Stories() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        decelerationRate="fast"
      >
        {stories.map((story) => (
          <TouchableOpacity
            key={story.id}
            style={styles.storyItem}
            onPress={() => {
              if (story.isLive) {
                router.push({
                  pathname: '/pages/story',
                  params: { user: story.name }
                });
              }
            }}
          >
            <View style={styles.avatarContainer}>
              <View style={[styles.avatarWrapper, story.isLive && styles.liveBorder]}>
                <Image source={story.avatar} style={styles.avatar} />
                {story.isLive && (
                  <View style={styles.liveBadge}>
                    <Text style={styles.liveText}>LIVE</Text>
                  </View>
                )}
              </View>
            </View>
            <Text style={styles.username}>{story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 5,
  },
  avatarWrapper: {
    width: 66,
    height: 66,
    borderRadius: 33,
    padding: 3,
    backgroundColor: 'white',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  liveBorder: {
    backgroundColor: '#ff0000',
  },
  liveBadge: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -20 }],
    backgroundColor: '#ff0000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    minWidth: 40,
  },
  liveText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    fontSize: 12,
    color: '#262626',
    textAlign: 'center',
  },
}); 