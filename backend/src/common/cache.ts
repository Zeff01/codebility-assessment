import KeyvRedis from '@keyv/redis';
import { createCache } from 'cache-manager';
import Keyv from 'keyv';
import ms from 'ms';
import { REDIS_URL } from '../config/env';

export const cache = createCache({
  stores: [
    new Keyv({
      ttl: ms('5m'),
      namespace: 'codebility-assessment',
      store: new KeyvRedis(REDIS_URL),
    }),
  ],
});
