import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { styles } from './styles';

// ─── Asset Imports ─────────────────────────────────────────────────────────────
const ICON_CAMERA = require('../../image-test/ig-resources/camera.png');
const ICON_LIVE = require('../../image-test/ig-resources/live.png');
const ICON_SEND = require('../../image-test/ig-resources/send.png');
const IMG_LOGO = require('../../image-test/ig-resources/Instagram_logo.svg.png');

export function Header() {
    return (
        <View style={styles.header}>
            <Pressable
                style={({ pressed }) => [
                    styles.headerIconBtn,
                    pressed && styles.actionPressed,
                ]}
            >
                <Image source={ICON_CAMERA} style={styles.headerIconImage} />
            </Pressable>

            <Image source={IMG_LOGO} style={styles.headerLogoImage} resizeMode="contain" />

            <View style={styles.headerRight}>
                <Pressable
                    style={({ pressed }) => [
                        styles.headerIconBtn,
                        pressed && styles.actionPressed,
                    ]}
                >
                    <Image source={ICON_LIVE} style={styles.headerIconImage} />
                    <View style={styles.notificationDot} />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.headerIconBtn,
                        pressed && styles.actionPressed,
                    ]}
                >
                    <Image source={ICON_SEND} style={styles.headerIconImage} />
                </Pressable>
            </View>
        </View>
    );
}
