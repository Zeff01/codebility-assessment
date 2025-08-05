import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Fonts, TextFontStyles } from '@/constants/Fonts';


interface PostProps {
  username: string;
  avatar: any;
  isVerified?: boolean;
  hasFlag?: boolean;
  timeAgo: string;
  content: string;
  likes: string;
  comments: string;
}

export default function Post({ 
  username, 
  avatar, 
  isVerified = false, 
  hasFlag = false, 
  timeAgo, 
  content, 
  likes, 
  comments 
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.userDetails}>
            <View style={styles.usernameRow}>
              <Text style={styles.username}>{username}</Text>
              {isVerified && <MaterialCommunityIcons name="check-decagram" size={16} color="#0095f6" style={styles.verified} />}
              {hasFlag && <Text style={styles.flag}>🇬🇧</Text>}
            </View>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>{content}</Text>
      </View>

      {/* Post Image */}
      <View style={styles.postImage} />

      {/* Post Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsLiked(!isLiked)}
        >
          <MaterialCommunityIcons
            name={isLiked ? "heart" : "heart-outline"}
            size={22}
            color={isLiked ? "#e74c3c" : "#262626"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="chat-outline" size={22} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setIsReposted(!isReposted)}
        >
          <MaterialCommunityIcons
            name="repeat-variant"
            size={22}
            color={isReposted ? "#27ae60" : "#262626"} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons
            name="send-outline"
            size={20}
            style={styles.rotatedIcon}
            color="#262626"
          />
        </TouchableOpacity>
      </View>


      {/* Engagement Info */}
      <View style={styles.engagement}>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.comments}>{comments} comments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    resizeMode: 'cover',
  },
  userDetails: {
    flex: 1,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  username: {
    color: '#262626',
  },
  verified: {
    fontSize: 12,
    color: '#0095f6',
  },
  flag: {
    fontSize: 12,
  },
  timeAgo: {
    color: '#8e8e93',
  },
  optionsButton: {
    padding: 5,
  },
  optionsIcon: {
    fontSize: 18,
    color: '#262626',
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  contentText: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionButton: {
    paddingRight: 20,
  },
  actionIcon: {
    fontSize: 22,
  },
  rotatedIcon: {
    transform: [{ rotate: '315deg' }],
  },
  engagement: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  likes: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 2,
  },
  comments: {
    fontSize: 14,
    color: '#8e8e93',
  },
}); 