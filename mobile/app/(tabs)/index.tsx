import React from 'react';
import {
  View, Text, StyleSheet, FlatList, SafeAreaView, useColorScheme,
} from 'react-native';
import Colors from '../../constants/Colors';
import IconBtn from '../../components/IconBtn';
import StoryBubble from '../../components/StoryBubble';

const stories = [
  { id: '1', name: 'Jeanne' },
  { id: '2', name: 'Julia', live: true },
  { id: '3', name: 'Brinda' },
  { id: '4', name: 'John' },
  { id: '5', name: 'Shui' },
];

const posts = [
  {
    id: 'p1',
    user: 'Terrance Mertz',
    time: '8 min',
    text:
      'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol ' +
      'sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus…',
    likes: 720,
    comments: 60,
  },
];

export default function FeedScreen() {
  const scheme = useColorScheme() ?? 'light';
  const C = Colors[scheme];

  return (
    // ✅ Force white background end-to-end
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {/* 👇 Centered mobile column */}
        <View style={styles.centerColumn}>
          {/* Header */}
          <View style={styles.header}>
            <IconBtn name="camera-outline" />
            <Text style={[styles.brand, { color: C.text }]}>Instagram</Text>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <IconBtn name="videocam-outline" />
              <IconBtn name="paper-plane-outline" />
            </View>
          </View>

          {/* Stories */}
          <FlatList
            horizontal
            data={stories}
            keyExtractor={(i) => i.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 8 }}
            style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e6e6e6' }}
            renderItem={({ item }) => <StoryBubble name={item.name} live={!!item.live} />}
          />

          {/* Posts */}
          <FlatList
            data={posts}
            keyExtractor={(i) => i.id}
            contentContainerStyle={{ paddingBottom: 32 }}
            renderItem={({ item }) => (
              <View style={styles.post}>
                <View style={styles.postHeader}>
                  <View style={styles.avatarCircle} />
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.user, { color: '#111' }]}>{item.user}</Text>
                    <Text style={[styles.time, { color: '#8e8e8e' }]}>{item.time}</Text>
                  </View>
                  <IconBtn name="ellipsis-horizontal" />
                </View>

                <View style={styles.photoPlaceholder} />

                <View style={styles.actions}>
                  <IconBtn name="heart-outline" />
                  <IconBtn name="chatbubble-outline" />
                  <IconBtn name="sync-outline" />
                  <IconBtn name="paper-plane-outline" />
                </View>

                <Text style={[styles.meta, { color: '#8e8e8e' }]}>
                  {item.comments} comments · {item.likes} likes
                </Text>

                <Text style={[styles.caption, { color: '#111' }]}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },

  // Keep the feed at phone width on web/desktop
  centerColumn: {
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
  },

  header: {
    height: 48,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: { fontSize: 22, fontWeight: '700', letterSpacing: 0.5 },

  post: { paddingHorizontal: 12, paddingTop: 12 },
  postHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  avatarCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#e5e5e5' },

  user: { fontSize: 14, fontWeight: '600' },
  time: { fontSize: 12 },

  actions: { flexDirection: 'row', gap: 18, paddingVertical: 10 },
  meta: { fontSize: 12, marginBottom: 6 },
  caption: { fontSize: 14, lineHeight: 20, marginBottom: 8 },

  photoPlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#efefef',
    borderRadius: 8,
  },
});
