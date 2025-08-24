import { Feather, MaterialIcons } from "@expo/vector-icons";
import { CircleCheckBig } from "lucide-react-native";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const stories = [
  { id: "1", name: "Jeanne", image: "https://i.pravatar.cc/150?img=1" },
  {
    id: "2",
    name: "Julia",
    image: "https://i.pravatar.cc/150?img=2",
    live: true,
  },
  { id: "3", name: "Brinda", image: "https://i.pravatar.cc/150?img=3" },
  { id: "4", name: "John", image: "https://i.pravatar.cc/150?img=4" },
  { id: "5", name: "Shui", image: "https://i.pravatar.cc/150?img=5" },
];

const posts = [
  {
    id: "p1",
    user: "Terrance Mertz",
    circleicon: true,
    flag: "🇺🇸",
    time: "8 min",
    text: "Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus.Acer aduro sol sulum. Acer aduro sol sulum tergiversatio vehemens tribu tabesco minima tot. Templum casus volo odit convervo celtellus soleo crudelis quis ex. ",
    likes: 720,
    comments: 60,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "p2",
    user: "Anabel Stracke",
    circleicon: true,
    flag: "🇺🇸",
    time: "3 hrs",
    text: "Veritas crux theologus col praesentium...",
    likes: 520,
    comments: 44,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.left}>
              <Feather name="camera" size={24} style={styles.icon} />
            </View>

            <View style={styles.center}>
              <Image
                source={require("../../assets/images/instagram.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.right}>
              <View style={styles.iconWithDot}>
                <MaterialIcons name="live-tv" size={24} style={styles.icon} />
                <View style={styles.dot} />
              </View>
              <Feather name="send" size={24} style={styles.icon} />
            </View>
          </View>

          {/* Stories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories.map((story) => (
              <View key={story.id} style={styles.storyItem}>
                <View style={{ position: "relative" }}>
                  <Image
                    source={{ uri: story.image }}
                    style={styles.storyImage}
                  />
                  {story.live && (
                    <View style={styles.liveTag}>
                      <Text style={styles.liveText}>LIVE</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.storyName}>{story.name}</Text>
              </View>
            ))}
          </ScrollView>
        </>
      }
      renderItem={({ item, index }) => (
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {/* Avatar + Timeline */}
          <View style={{ alignItems: "center" }}>
            {/* Avatar */}
            <Image source={{ uri: item.avatar }} style={styles.postAvatar} />

            {/* Timeline line: extend down beside actions */}
            {index === 0 && <View style={[styles.timelineLine, { flex: 1 }]} />}
          </View>

          {/* Post Content */}
          <View style={[styles.post, { flex: 1 }]}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Text style={styles.postUser}>{item.user}</Text>
                {item.circleicon && (
                  <CircleCheckBig
                    size={16}
                    color="deeppink"
                    style={{ marginLeft: 4 }}
                  />
                )}
                <Text style={{ marginLeft: 4, fontSize: 14 }}>{item.flag}</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.postTime}>{item.time}</Text>
                <Feather
                  name="more-vertical"
                  size={20}
                  style={{ marginLeft: 8 }}
                />
              </View>
            </View>

            {/* Post Text */}
            <Text style={styles.postText}>{item.text}</Text>

            <View style={[styles.actions, { marginTop: 200 }]}>
              <Feather name="heart" size={24} style={styles.icon} />
              <Feather name="message-circle" size={24} style={styles.icon} />
              <Feather name="repeat" size={24} style={styles.icon} />
              <Feather name="send" size={24} />
            </View>

            {/* Likes & Comments */}
            <Text style={styles.meta}>
              {item.comments} comments · {item.likes} likes
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  left: { flex: 1, alignItems: "flex-start" },
  center: { flex: 2, alignItems: "center", justifyContent: "center" },
  logoImage: { width: 100, height: 50 },
  right: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
  icon: { marginHorizontal: 5 },
  iconWithDot: { position: "relative", marginHorizontal: 5 },
  dot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#fff",
  },

  // Stories
  storyItem: { alignItems: "center", marginHorizontal: 10 },
  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 3,
    borderColor: "deeppink",
  },
  storyName: { marginTop: 5, fontSize: 12 },
  liveTag: {
    position: "absolute",
    bottom: -6, 
    left: "50%",
    transform: [{ translateX: -20 }],
    backgroundColor: "deeppink",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  liveText: { fontSize: 10, color: "white", fontWeight: "bold" },

  // Posts
  post: { padding: 15, borderBottomWidth: 0.5, borderColor: "#eee" },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postUser: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postTime: {
    fontSize: 12,
    color: "gray",
  },
  postText: {
    marginBottom: 10,
    fontSize: 14,
  },

  meta: {
    fontSize: 12,
    color: "gray",
  },

  postAvatar: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 25,
    marginBottom: 4,
  },

  timelineLine: {
    width: 2,
    flexGrow: 1,
    backgroundColor: "#ddd",
    marginTop: 2,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
});
