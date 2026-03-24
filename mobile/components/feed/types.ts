import { ImageSourcePropType } from 'react-native';

export interface Story {
    id: string;
    name: string;
    avatar: ImageSourcePropType;
    isLive?: boolean;
}

export interface Post {
    id: string;
    username: string;
    avatar: string;
    timeAgo: string;
    isVerified?: boolean;
    flagEmoji?: string;
    content: string;
    likes: number;
    comments: number;
    postImage?: string;
}
