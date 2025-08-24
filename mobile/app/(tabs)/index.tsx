// app/(tabs)/index.tsx
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, SafeAreaView, useColorScheme, Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import IconBtn from '../../components/IconBtn';
import StoryBubble from '../../components/StoryBubble';

// ✅ Stories with local avatars
const stories = [
  { id: '1', name: 'Jenny', source: require('../../assets/avatars/jenny.jpg') },
  { id: '2', name: 'Julia', source: require('../../assets/avatars/julia.png'), live: true },
  { id: '3', name: 'Mark',  source: require('../../assets/avatars/mark.png') },
  { id: '4', name: 'John',  source: require('../../assets/avatars/john.jpg') },
  { id: '5', name: 'Shui',  source: require('../../assets/avatars/shui.png') },
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
    avatar: require('../../assets/avatars/jenny.jpg'), // 👈 sample avatar
  },
  {
    id: 'p2',
    user: 'Lebron James',
    time: '30 min',
    text:
      'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol ' +
      'sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus…',
    likes: 1000,
    comments: 670,
    avatar: require('../../assets/avatars/john.jpg'), // 👈 another avatar
  },
];

export default function FeedScreen() {
  const scheme = useColorScheme() ?? 'light';
  const C = Colors[scheme];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
            renderItem={({ item }) => (
              <StoryBubble
                name={item.name}
                live={!!item.live}
                source={item.source}
              />
            )}
          />

          {/* Posts */}
          <FlatList
            data={posts}
            keyExtractor={(i) => i.id}
            contentContainerStyle={{ paddingBottom: 32 }}
            renderItem={({ item }) => (
               <View style={styles.post}>
                  <View style={styles.postHeader}>
                    {item.avatar ? (
                     <Image source={item.avatar} style={styles.postAvatar} />
                  ) : (
                    <View style={styles.avatarCircle} />
                  )}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },

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

  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },

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
