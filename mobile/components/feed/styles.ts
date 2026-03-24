import { StyleSheet } from 'react-native';
import { PINK, BORDER_COLOR } from './constants';

export const styles = StyleSheet.create({
    // ─── Layout ──────────────────────────────────────────────────────────────────
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    bottomPadding: {
        height: 20,
    },

    // ─── Header ──────────────────────────────────────────────────────────────────
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: BORDER_COLOR,
        marginTop: 50,
    },
    headerLogo: {
        fontFamily: 'serif',
        fontSize: 26,
        color: '#000000',
        fontStyle: 'italic',
        fontWeight: '400',
        letterSpacing: 0.5,
    },
    headerIconBtn: {
        padding: 4,
        position: 'relative',
    },
    headerIconImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    headerLogoImage: {
        width: 104,
        height: 32,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    notificationDot: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: PINK,
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
    },

    // ─── Stories ─────────────────────────────────────────────────────────────────
    storiesContainer: {
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    storiesDivider: {
        height: 0.5,
        backgroundColor: BORDER_COLOR,
    },
    storyItem: {
        alignItems: 'center',
        marginHorizontal: 6,
        width: 68,
    },
    storyGradientRing: {
        width: 72,
        height: 72,
        borderRadius: 36,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    storyRingInner: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FFFFFF',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    storyAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    liveBadge: {
        position: 'absolute',
        bottom: -2,
        backgroundColor: PINK,
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
    },
    liveBadgeText: {
        color: '#FFFFFF',
        fontSize: 8,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    storyName: {
        fontSize: 11,
        color: '#333333',
        textAlign: 'center',
        maxWidth: 64,
        fontWeight: '400',
        letterSpacing: -0.5,
    },

    // ─── Post Card ───────────────────────────────────────────────────────────────
    postCard: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
        paddingTop: 12,
        paddingBottom: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: BORDER_COLOR,
    },
    threadRow: {
        flexDirection: 'row',
    },
    threadLeftCol: {
        alignItems: 'center',
        width: 40,
        marginRight: 10,
    },
    postAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 4,
    },
    threadLineContainer: {
        flex: 1,
        alignItems: 'center',
        width: 40,
    },
    threadLine: {
        flex: 1,
        width: 1.5,
        backgroundColor: '#DFDFDF',
        marginVertical: 4,
    },
    smallAvatarIcon: {
        width: 9,
        height: 9,
        borderRadius: 4.5,
        marginBottom: 2,
        zIndex: 2,
    },
    tinyBlueIcon: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginBottom: 39,
    },
    threadRightCol: {
        flex: 1,
    },

    // ─── Post Header ─────────────────────────────────────────────────────────────
    postHeaderRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    postMetaTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
        flex: 1,
    },
    postUsername: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111111',
        letterSpacing: -0.5,
    },
    verifiedIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
    },
    flagIcon: {
        width: 14,
        height: 10,
        resizeMode: 'contain',
    },
    postHeaderFarRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    postTime: {
        fontSize: 14,
        color: '#8E8E8E',
        fontWeight: '400',
        letterSpacing: -0.5,
    },
    moreButton: {
        paddingTop: 2,
    },
    moreButtonText: {
        fontSize: 18,
        color: '#888888',
        letterSpacing: 1,
        lineHeight: 18,
    },

    // ─── Post Content ────────────────────────────────────────────────────────────
    postContent: {
        fontSize: 14,
        fontWeight: '400',
        color: '#222222',
        lineHeight: 14 * 1.4,
        letterSpacing: -0.5,
        marginBottom: 10,
    },
    postContentFirst: {
        marginBottom: 215,
    },

    // ─── Post Actions ────────────────────────────────────────────────────────────
    actionIcons: {
        flexDirection: 'row',
        gap: 2,
        marginBottom: 4,
    },
    actionIcon: {
        padding: 4,
        marginLeft: -4,
    },
    actionIconImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    actionPressed: {
        opacity: 0.5,
    },
    engagementText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#8E8E8E',
        letterSpacing: -0.5,
        marginBottom: 10,
    },

    // ─── Bottom Tab Bar ──────────────────────────────────────────────────────────
    bottomTabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderTopColor: BORDER_COLOR,
        backgroundColor: '#FFFFFF',
        marginBottom: 50,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 4,
    },
    tabIconImage: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
});
