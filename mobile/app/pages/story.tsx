import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function StoryScreen() {
  const params = useLocalSearchParams();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const insets = useSafeAreaInsets();

  // Mock story data
  const stories = [
    {
      id: 1,
      user: params.user || 'Julia',
      avatar: require('@/assets/images/2.png'),
      isLive: true,
      content: 'Live from my studio! 🎵',
      timestamp: '2 min ago',
    },
    {
      id: 2,
      user: 'Julia',
      avatar: require('@/assets/images/2.png'),
      isLive: true,
      content: 'Working on new music 🎼',
      timestamp: '5 min ago',
    },
    {
      id: 3,
      user: 'Julia',
      avatar: require('@/assets/images/2.png'),
      isLive: true,
      content: 'Coffee break ☕',
      timestamp: '8 min ago',
    },
  ];

  const currentStory = stories[currentStoryIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prevIndex => prevIndex + 1);
            return 0;
          } else {
            router.back();
            return prev;
          }
        }
        return prev + 0.01;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentStoryIndex, stories.length]);

  const handleClose = () => {
    router.back();
  };

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      router.back();
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        {stories.map((_, index) => (
          <View key={index} style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${index === currentStoryIndex ? progress * 100 : index < currentStoryIndex ? 100 : 0}%` }
              ]}
            />
          </View>
        ))}
      </View>

      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <View style={styles.userInfo}>
          <Image source={currentStory.avatar} style={styles.avatar} />
          <View style={styles.userDetails}>
            <Text style={styles.username}>{currentStory.user}</Text>
            <Text style={styles.timestamp}>{currentStory.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <MaterialCommunityIcons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Story Content */}
      <View style={styles.content}>
        <View style={styles.storyImage}>
          <Image source={currentStory.avatar} style={styles.fullImage} />
          <View style={styles.overlay}>
            <Text style={styles.storyText}>{currentStory.content}</Text>
          </View>
        </View>
      </View>

      {/* Live Badge */}
      {currentStory.isLive && (
        <View style={styles.liveIndicator}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}

      {/* Navigation Areas */}
      <TouchableOpacity style={styles.leftArea} onPress={handlePrevious} />
      <TouchableOpacity style={styles.rightArea} onPress={handleNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  progressContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
    gap: 5,
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
    zIndex: 10, 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10, 
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userDetails: {
    zIndex: 10,
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  closeButton: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  storyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  liveIndicator: {
    position: 'absolute',
    top: 100,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 4,
  },
  liveText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  leftArea: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width * 0.3,
    height: height,
  },
  rightArea: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: width * 0.3,
    height: height,
  },
});
