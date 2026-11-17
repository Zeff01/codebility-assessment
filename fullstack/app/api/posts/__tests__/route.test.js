/** @jest-environment node */

import { GET } from '../route'
import { posts } from '../../../../data/posts'

describe('GET /api/posts', () => {
  test('returns all blog posts with status 200', async () => {
    const response = await GET()

    expect(response.status).toBe(200)

    const data = await response.json();

    expect(data).toHaveLength(posts.length);
    expect(data).toEqual(posts);
  });
});