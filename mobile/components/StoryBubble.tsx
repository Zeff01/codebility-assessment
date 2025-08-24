// components/StoryBubble.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = { name: string; uri?: string; live?: boolean };

export default function StoryBubble({ name, uri, live }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={[styles.ring, live && styles.liveRing]}>
        {uri ? (
          <Image source={{ uri }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.placeholder]}>
            <Ionicons name="person" size={26} color="#9e9e9e" />
          </View>
        )}
        {live && (
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
      </View>
      <Text numberOfLines={1} style={styles.label}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: 68, alignItems: 'center' },
  ring: {
    width: 56, height: 56, borderRadius: 28, padding: 2,
    borderWidth: 2, borderColor: '#d6249f', position: 'relative',
  },
  liveRing: { borderColor: '#ff2d75' },
  avatar: { width: '100%', height: '100%', borderRadius: 28 },
  placeholder: { backgroundColor: '#efefef', alignItems: 'center', justifyContent: 'center' },
  label: { marginTop: 6, fontSize: 12, color: '#111', maxWidth: 68 },
  liveBadge: {
    position: 'absolute', bottom: -2, left: '50%', transform: [{ translateX: -18 }],
    backgroundColor: '#ff2d75', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4,
  },
  liveText: { color: '#fff', fontSize: 9, fontWeight: '700', letterSpacing: 0.3 },
});
