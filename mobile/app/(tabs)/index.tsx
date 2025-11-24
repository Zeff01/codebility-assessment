import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import { stories, posts } from "@/data/fakeData";
import { Feather, Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <Feather name="camera" size={24} color="#000" />
        <Image
                source={require("../../assets/Instagram_logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
                    source={require('@/assets/ig_live.png')}
                    style={{ width: 26, height: 26, marginRight: 15 }}
                    />
          <Feather name="send" size={24} color="#000" />
        </View>
      </View>
      {/* this is the stories data from fakeData.js */}
      <View style={styles.storiesContainer}>
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.storyItem}>
              <View style={{ position: "relative" }}>
          <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />

          {item.live && (
            <Image
              source={require("@/assets/live.png")}
              style={styles.liveBadge}
            />
          )}
        </View>
              <ThemedText style={styles.storyName}>{item.name}heloo</ThemedText>
            </View>
          )}
        />
      </View>

      {/* this is the posts data from fakeData.js */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ThemedText style={styles.postName}>{item.name}</ThemedText>

                  {item.verified && (
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color="#FF2D87"
                      style={{ marginLeft: 4 }}
                    />
                  )}
                </View>
              </View>
              
              <ThemedText style={styles.postTime}>{item.time}</ThemedText>
              <Feather name="more-horizontal" size={20} color="#666" style={{ marginLeft: 10 }} />
            </View>

            <ThemedText style={styles.postText}>{item.text}</ThemedText>

            <View style={styles.actionContainer}>
              <Feather name="heart" size={24} style={styles.icon} />
              <Feather name="message-circle" size={24} style={styles.icon} />
              <Feather name="repeat" size={24} style={styles.icon} />
              <Feather name="send" size={24} style={styles.icon} />
            </View>

            <ThemedText style={styles.statsText}>
              60 comments · 720 likes
            </ThemedText>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  storiesContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  storyItem: {
    alignItems: "center",
    marginRight: 18,
  },
  storyAvatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff006a",
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  postAvatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  postName: {
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
  },
  postText: {
    marginTop: 6,
    marginBottom: 15,
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 6,
  },
  icon: {
    fontSize: 22,
  },
  statsText: {
    color: "#777",
    fontSize: 12,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    marginTop: 40,
  },
  logo: {
    width: 120,
    height: 30,
    marginLeft: 40,
  },
  liveBadge: {
  position: "absolute",
  marginTop: 10,
  alignSelf: "center",
  width: 40,
  height: 100,
  resizeMode: "contain",
},
});
