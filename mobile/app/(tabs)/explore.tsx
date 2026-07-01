import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  StyleSheet,
  StatusBar,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/grand-hotel';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const PINK = '#DA2C77';
const DARK = '#262626';
const GRAY = '#8e8e8e';
const BORDER = '#efefef';

// ---- Mock data -------------------------------------------------

const STORIES = [
  { id: '1', name: 'Jeanne', live: false, avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: '2', name: 'Julia', live: true, avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: '3', name: 'Brinda', live: false, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '4', name: 'John', live: false, avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: '5', name: 'Shuiming', live: false, avatar: 'https://i.pravatar.cc/150?img=25' },
];

const POSTS = [
  {
    id: 'p1',
    name: 'Terrance Mertz',
    verified: true,
    flag: 'https://flagcdn.com/w40/th.png',
    flagLabel: 'Thailand',
    time: '8 min',
    avatar: null, // placeholder tile like design
    text:
      'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus soleo crudelis quis ex.',
    likes: 720,
    comments: 60,
  },
  {
    id: 'p2',
    name: 'Anabel Stracke',
    verified: false,
    flag: 'https://flagcdn.com/w40/gb.png',
    flagLabel: 'United Kingdom',
    time: '3 hrs',
    avatar: 'https://i.pravatar.cc/150?img=51',
    text: 'Veritas crux theologus sol praesentium...',
    likes: 0,
    comments: 0,
    truncated: true,
  },
];

// ---- Small building blocks --------------------------------------

function IconButton({ name, size = 22, color = DARK, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }, style]}
    >
      <Feather name={name} size={size} color={color} />
    </Pressable>
  );
}

function StoryAvatar({ item }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.storyItem, { opacity: pressed ? 0.6 : 1 }]}
    >
      <View style={styles.storyRing}>
        <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
        {item.live && (
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>LIVE</Text>
          </View>
        )}
      </View>
      <Text style={styles.storyName} numberOfLines={1}>
        {item.name}
      </Text>
    </Pressable>
  );
}

function PostHeader({ post }) {
  return (
    <View style={styles.postHeader}>
      {post.avatar ? (
        <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
      ) : (
        <View style={styles.postAvatarPlaceholder} />
      )}
      <View style={styles.postHeaderText}>
        <View style={styles.postNameRow}>
          <Text style={styles.postName}>{post.name}</Text>
          {post.verified && (
            <View style={styles.verifiedBadge}>
              <Feather name="check" size={9} color="#fff" />
            </View>
          )}
          <Image
            source={{ uri: post.flag }}
            style={styles.flag}
            accessibilityLabel={post.flagLabel}
          />
        </View>
      </View>
      <Text style={styles.postTime}>{post.time}</Text>
      <IconButton name="more-horizontal" size={18} color={GRAY} style={{ marginLeft: 8 }} />
    </View>
  );
}

function PostActions({ liked, onToggleLike }) {
  return (
    <View style={styles.actionsRow}>
      <IconButton
        name="heart"
        color={liked ? PINK : DARK}
        onPress={onToggleLike}
        style={{ marginRight: 16 }}
      />
      <IconButton name="message-circle" style={{ marginRight: 16 }} />
      <IconButton name="repeat" style={{ marginRight: 16 }} />
      <IconButton name="send" />
    </View>
  );
}

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <View style={styles.post}>
      <PostHeader post={post} />
      <Text style={styles.postText} numberOfLines={post.truncated ? 1 : undefined}>
        {post.text}
      </Text>
      {!post.truncated && (
        <>
          <PostActions liked={liked} onToggleLike={() => setLiked((v) => !v)} />
          <Text style={styles.metaText}>
            {post.comments} comments · {likeCount} likes
          </Text>
        </>
      )}
    </View>
  );
}

function TabBarIcon({ name, focused, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      style={({ pressed }) => [styles.tabItem, { opacity: pressed ? 0.4 : 1 }]}
    >
      <Feather name={name} size={24} color={focused ? DARK : '#8e8e8e'} />
    </Pressable>
  );
}

// ---- Screen -------------------------------------------------------

export default function FeedScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    GrandHotel_400Regular,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <IconButton name="camera" size={24} />
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerRight}>
          <View style={{ marginRight: 18 }}>
            <Feather name="tv" size={22} color={DARK} />
            <View style={styles.headerDot} />
          </View>
          <IconButton name="send" size={22} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories */}
        <FlatList
          data={STORIES}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesList}
          renderItem={({ item }) => <StoryAvatar item={item} />}
        />

        <View style={styles.divider} />

        {/* Posts */}
        {POSTS.map((post, idx) => (
          <View key={post.id}>
            <Post post={post} />
            {idx < POSTS.length - 1 && <View style={styles.postDivider} />}
          </View>
        ))}
      </ScrollView>

      {/* Bottom tab bar */}
      <View style={styles.tabBar}>
        <TabBarIcon name="home" focused={activeTab === 'home'} onPress={() => setActiveTab('home')} />
        <TabBarIcon name="search" focused={activeTab === 'search'} onPress={() => setActiveTab('search')} />
        <TabBarIcon name="plus-square" focused={activeTab === 'add'} onPress={() => setActiveTab('add')} />
        <TabBarIcon name="heart" focused={activeTab === 'likes'} onPress={() => setActiveTab('likes')} />
        <TabBarIcon name="user" focused={activeTab === 'profile'} onPress={() => setActiveTab('profile')} />
      </View>
    </SafeAreaView>
  );
}

// ---- Styles ---------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    fontFamily: 'GrandHotel_400Regular',
    fontSize: 30,
    color: DARK,
    // Same Grand Hotel script font as the login screen wordmark.
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PINK,
  },

  // Stories
  storiesList: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 6,
    width: 64,
  },
  storyRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  liveBadge: {
    position: 'absolute',
    bottom: -4,
    backgroundColor: PINK,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  liveBadgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '700',
  },
  storyName: {
    fontSize: 12,
    color: DARK,
    marginTop: 6,
  },

  divider: {
    height: 8,
    backgroundColor: '#fafafa',
  },
  postDivider: {
    height: 8,
    backgroundColor: '#fafafa',
  },

  // Posts
  post: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  postAvatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0e6d2',
  },
  postHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  postNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postName: {
    fontSize: 14,
    fontWeight: '600',
    color: DARK,
    marginRight: 5,
  },
  verifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  flag: {
    width: 16,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#f0f0f0',
  },
  postTime: {
    fontSize: 12,
    color: GRAY,
  },
  postText: {
    fontSize: 14,
    lineHeight: 20,
    color: DARK,
    marginBottom: 14,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 13,
    color: GRAY,
  },

  // Tab bar
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingVertical: Platform.OS === 'ios' ? 10 : 12,
  },
  tabItem: {
    padding: 6,
  },
});