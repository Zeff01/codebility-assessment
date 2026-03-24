import { Story, Post } from './types';

// ─── Color Tokens ──────────────────────────────────────────────────────────────
export const PINK = '#E91E8C';
export const BORDER_COLOR = '#EFEFEF';

// ─── Gradient Presets ──────────────────────────────────────────────────────────
export const IG_GRADIENT: [string, string, string] = ['#f9a825', '#e91e8c', '#9c27b0'];
export const IG_GRADIENT_LIVE: [string, string] = ['#e91e8c', '#e91e8c'];

// ─── Mock Data ─────────────────────────────────────────────────────────────────
export const STORIES: Story[] = [
    {
        id: '1',
        name: 'Jeanne',
        avatar: require('../../image-test/ig-resources/jeane.png'),
    },
    {
        id: '2',
        name: 'Julia',
        avatar: require('../../image-test/ig-resources/julia.png'),
        isLive: true,
    },
    {
        id: '3',
        name: 'Brinda',
        avatar: require('../../image-test/ig-resources/brinda.png'),
    },
    {
        id: '4',
        name: 'John',
        avatar: require('../../image-test/ig-resources/john.png'),
    },
    {
        id: '5',
        name: 'Shui',
        avatar: require('../../image-test/ig-resources/shuin.png'),
    },
];

export const POSTS: Post[] = [
    {
        id: '1',
        username: 'Terrance Mertz',
        avatar: 'local:pixelbrown',
        timeAgo: '8 min',
        isVerified: true,
        flagEmoji: 'flag',
        content:
            'Absorbeo alias adnuo cogito tergum decipio creptio curo molestias minus. Acer aduro sol sulum tergiversatio vehemens tribuo tabesco minima tot. Templum casus volo odit conservo cultellus soleo crudelis quis ex.',
        likes: 720,
        comments: 60,
        postImage: 'pixelblue',
    },
    {
        id: '2',
        username: 'Anabel Stracke',
        avatar: 'local:lastprog',
        timeAgo: '3 hrs',
        flagEmoji: 'flag',
        content: 'Veritas crux theologus sol praesentium...',
        likes: 340,
        comments: 22,
    },
];
