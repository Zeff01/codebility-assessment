import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Post } from './types';
import { resolveAvatarSource } from './utils';
import { styles } from './styles';

// ─── Asset Imports ─────────────────────────────────────────────────────────────
const ICON_VERIFIED = require('../../image-test/ig-resources/verified.svg');
const ICON_FLAG = require('../../image-test/ig-resources/flag.svg');
const ICON_HEART = require('../../image-test/ig-resources/heart.png');
const ICON_COMMENT = require('../../image-test/ig-resources/comment.svg');
const ICON_REPOST = require('../../image-test/ig-resources/repost.png');
const ICON_SEND = require('../../image-test/ig-resources/send.png');
const IMG_SMALL_AVATAR = require('../../image-test/ig-resources/small.png');
const IMG_PIXEL_BLUE = require('../../image-test/ig-resources/pixelblue.png');

// ─── Sub-components ────────────────────────────────────────────────────────────
function PostHeader({ post }: { post: Post }) {
    return (
        <View style={styles.postHeaderRight}>
            <View style={styles.postMetaTop}>
                <Text style={styles.postUsername}>{post.username}</Text>
                {post.isVerified && (
                    <Image source={ICON_VERIFIED} style={styles.verifiedIcon} />
                )}
                {post.flagEmoji === 'flag' && (
                    <Image source={ICON_FLAG} style={styles.flagIcon} />
                )}
            </View>
            <View style={styles.postHeaderFarRight}>
                <Text style={styles.postTime}>{post.timeAgo}</Text>
                <Pressable style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>···</Text>
                </Pressable>
            </View>
        </View>
    );
}

function ActionBar() {
    return (
        <View style={styles.actionIcons}>
            <Pressable style={({ pressed }) => [styles.actionIcon, pressed && styles.actionPressed]}>
                <Image source={ICON_HEART} style={styles.actionIconImg} />
            </Pressable>
            <Pressable style={({ pressed }) => [styles.actionIcon, pressed && styles.actionPressed]}>
                <Image source={ICON_COMMENT} style={styles.actionIconImg} />
            </Pressable>
            <Pressable style={({ pressed }) => [styles.actionIcon, pressed && styles.actionPressed]}>
                <Image source={ICON_REPOST} style={styles.actionIconImg} />
            </Pressable>
            <Pressable style={({ pressed }) => [styles.actionIcon, pressed && styles.actionPressed]}>
                <Image source={ICON_SEND} style={styles.actionIconImg} />
            </Pressable>
        </View>
    );
}

function ThreadConnector() {
    return (
        <View style={styles.threadLineContainer}>
            <View style={styles.threadLine} />
            <Image source={IMG_SMALL_AVATAR} style={styles.smallAvatarIcon} />
            <Image source={IMG_PIXEL_BLUE} style={styles.tinyBlueIcon} />
        </View>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    const isFirst = post.id === '1';

    return (
        <View style={styles.postCard}>
            <View style={styles.threadRow}>
                {/* Left Column: Avatar + Thread Line */}
                <View style={styles.threadLeftCol}>
                    <Image source={resolveAvatarSource(post.avatar)} style={styles.postAvatar} />
                    {isFirst && <ThreadConnector />}
                </View>

                {/* Right Column: Content */}
                <View style={styles.threadRightCol}>
                    <PostHeader post={post} />
                    <Text style={[styles.postContent, isFirst && styles.postContentFirst]}>
                        {post.content}
                    </Text>
                    <ActionBar />
                    <Text style={styles.engagementText}>
                        {post.comments} comments · {post.likes} likes
                    </Text>
                </View>
            </View>
        </View>
    );
}
