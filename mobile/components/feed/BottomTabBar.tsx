import React from 'react';
import { View, Image, Pressable, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

// ─── Tab Definitions ───────────────────────────────────────────────────────────
interface Tab {
    icon: ImageSourcePropType;
    label: string;
    active: boolean;
}

const TABS: Tab[] = [
    { icon: require('../../image-test/ig-resources/home.png'), label: 'home', active: true },
    { icon: require('../../image-test/ig-resources/search.png'), label: 'search', active: false },
    { icon: require('../../image-test/ig-resources/more.png'), label: 'create', active: false },
    { icon: require('../../image-test/ig-resources/heart.png'), label: 'likes', active: false },
    { icon: require('../../image-test/ig-resources/user.png'), label: 'profile', active: false },
];

export function BottomTabBar() {
    return (
        <View style={styles.bottomTabBar}>
            {TABS.map((tab) => (
                <Pressable
                    key={tab.label}
                    style={({ pressed }) => [
                        styles.tabItem,
                        pressed && styles.actionPressed,
                    ]}
                >
                    <Image
                        source={tab.icon}
                        style={[
                            styles.tabIconImage,
                            !tab.active && { opacity: 0.6 },
                        ]}
                    />
                </Pressable>
            ))}
        </View>
    );
}
