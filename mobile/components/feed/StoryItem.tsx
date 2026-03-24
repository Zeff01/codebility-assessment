import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Story } from './types';
import { IG_GRADIENT, IG_GRADIENT_LIVE } from './constants';
import { styles } from './styles';

interface StoryItemProps {
    story: Story;
}

export function StoryItem({ story }: StoryItemProps) {
    return (
        <View style={styles.storyItem}>
            {/* @ts-ignore */}
            <LinearGradient
                colors={story.isLive ? IG_GRADIENT_LIVE : IG_GRADIENT}
                start={{ x: 0.2, y: 1 }}
                end={{ x: 1, y: 0.1 }}
                style={styles.storyGradientRing}
            >
                <View style={styles.storyRingInner}>
                    <Image source={story.avatar} style={styles.storyAvatar} />
                    {story.isLive && (
                        <View style={styles.liveBadge}>
                            <Text style={styles.liveBadgeText}>LIVE</Text>
                        </View>
                    )}
                </View>
            </LinearGradient>
            <Text style={styles.storyName} numberOfLines={1}>
                {story.name}
            </Text>
        </View>
    );
}
