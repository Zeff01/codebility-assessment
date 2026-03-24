import { ImageSourcePropType } from 'react-native';

const AVATAR_MAP: Record<string, ImageSourcePropType> = {
    'local:pixelbrown': require('../../image-test/ig-resources/pixelbrown.png'),
    'local:lastprog': require('../../image-test/ig-resources/lastprog.png'),
};

export function resolveAvatarSource(avatar: string): ImageSourcePropType {
    return AVATAR_MAP[avatar] ?? { uri: avatar };
}
