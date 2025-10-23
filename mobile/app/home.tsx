import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    Image,
    ListRenderItem,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


type Story = {
  id: number;
  name: string;
  image: string;
  isLive: boolean;
};

type Post = {
  id: number;
  user: string;
  avatar: string;
  verified: boolean;
  country: string;
  time: string;
  text: string;
  postImage: string;
  likes: number;
  comments: number;
};

const stories: Story[] = [
  { id: 1, name: "Jeanne", image: "https://randomuser.me/api/portraits/women/1.jpg", isLive: false },
  { id: 2, name: "Julia", image: "https://randomuser.me/api/portraits/women/2.jpg", isLive: true },
  { id: 3, name: "Brinda", image: "https://randomuser.me/api/portraits/men/3.jpg", isLive: false },
  { id: 4, name: "John", image: "https://randomuser.me/api/portraits/men/4.jpg", isLive: false },
  { id: 5, name: "Shui", image: "https://randomuser.me/api/portraits/women/5.jpg", isLive: false },
];

const posts: Post[] = [
  {
    id: 1,
    user: "Terrance Mertz",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    verified: true,
    country: "🇬🇧",
    time: "8 min",
    text: "Absorbeo alias adnuo cogito tergum deepio creptio curo molestias minus.",
    postImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    likes: 720,
    comments: 60,
  },
  {
    id: 2,
    user: "Anabel Stracke",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    verified: false,
    country: "🇬🇧",
    time: "3 hrs",
    text: "Veritas crux theologus col praesentium...",
    postImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop",
    likes: 450,
    comments: 34,
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const renderStory: ListRenderItem<Story> = ({ item }) => (
    <View style={styles.storyItem}>
      <View
        style={[
          styles.storyBorder,
          item.isLive ? styles.liveBorder : styles.gradientBorder,
        ]}
      >
        <View style={styles.storyInnerBorder}>
          <Image source={{ uri: item.image }} style={styles.storyImage} />
        </View>
      </View>

      {item.isLive && (
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      )}
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
  );

  const renderPost: ListRenderItem<Post> = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderLeft}>
          <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
          <View style={styles.postUserInfo}>
            <View style={styles.usernameRow}>
              <Text style={styles.postUsername}>{item.user}</Text>
              {item.verified && (
                <Ionicons name="checkmark-circle" size={14} left={4} color="#3897f0" />
              )}
              <Text style={styles.countryFlag}>{item.country}</Text>
            </View>
          </View>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.postText}>{item.text}</Text>

      <Image source={{ uri: item.postImage }} style={styles.postImage} />

      <View style={styles.actionButtons}>
        <View style={styles.leftActions}>
          <Ionicons name="heart-outline" size={26} color="#000" style={styles.actionIcon} />
          <Ionicons name="chatbubble-outline" size={26} color="#000" style={styles.actionIcon} />
          <Ionicons name="paper-plane-outline" size={26} color="#000" style={styles.actionIcon} />
        </View>
        <Ionicons name="bookmark-outline" size={26} color="#000" />
      </View>

      <Text style={styles.postStats}>
        {item.comments} comments · {item.likes} likes
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="camera-outline" size={26} color="#000" />
        <Text style={styles.logoText}>Instagram</Text>
        <View style={styles.headerRight}>
          <Ionicons name="play-circle-outline" size={26} color="#000" style={styles.headerIcon} />
          <Ionicons name="paper-plane-outline" size={26} color="#000" style={styles.headerIcon} />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 + insets.bottom }}
      >
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.storiesContainer}
          renderItem={renderStory}
        />
        <View style={styles.divider} />
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPost}
          scrollEnabled={false}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={[
          styles.bottomNav,
          {
            paddingBottom: insets.bottom > 0 ? insets.bottom : 12,
          },
        ]}
      >
        <Ionicons name="home" size={26} color="#000" />
        <Ionicons name="search" size={26} color="#000" />
        <Ionicons name="add-circle-outline" size={28} color="#000" />
        <Ionicons name="heart-outline" size={26} color="#000" />
        <Ionicons name="person-outline" size={26} color="#000" />
      </View>
    </SafeAreaView>
  );
}

// ============ Styles ============ //
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbdbdb",
  },
  logoText: { fontSize: 26, fontWeight: "600", fontFamily: "serif" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  headerIcon: { marginLeft: 20 },

  // Stories
  storiesContainer: { paddingHorizontal: 10, paddingVertical: 14 },
  storyItem: { alignItems: "center", marginRight: 14, position: "relative" },
  storyBorder: { padding: 2.5, borderRadius: 40 },
  gradientBorder: { backgroundColor: "#E1306C" },
  liveBorder: { backgroundColor: "#8B3DFF" },
  storyInnerBorder: { padding: 2.5, borderRadius: 37, backgroundColor: "#fff" },
  storyImage: { width: 64, height: 64, borderRadius: 32 },
  storyText: { marginTop: 4, fontSize: 12, color: "#262626" },
  liveBadge: {
    position: "absolute",
    bottom: 16,
    backgroundColor: "#8B3DFF",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  liveText: { color: "#fff", fontSize: 9, fontWeight: "700" },
  divider: { height: 0.5, backgroundColor: "#dbdbdb" },

  // Posts
  postContainer: { marginBottom: 16 },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  postHeaderLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  postAvatar: { width: 32, height: 32, borderRadius: 16 },
  postUserInfo: { marginLeft: 10, flex: 1 },
  usernameRow: { flexDirection: "row", alignItems: "center" },
  postUsername: { fontSize: 13, fontWeight: "600", color: "#262626" },
  countryFlag: { marginLeft: 8, fontSize: 12 },
  postTime: { fontSize: 12, color: "#8e8e8e", marginRight: 8 },
  postText: {
    paddingHorizontal: 12,
    fontSize: 13,
    lineHeight: 18,
    color: "#000",
    marginBottom: 8,
  },
  postImage: { width: "100%", height: 400, backgroundColor: "#f0f0f0" },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftActions: { flexDirection: "row" },
  actionIcon: { marginRight: 16 },
  postStats: {
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#8e8e8e",
    marginBottom: 8,
  },

  // Bottom Nav fixed
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  navProfile: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: "#dbdbdb",
  },
});
