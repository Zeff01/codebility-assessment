import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export default function IconBtn({ name, size = 22, color = '#111', onPress, style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }, style]}
      android_ripple={{ color: '#ddd', borderless: true }}
      hitSlop={8}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}
