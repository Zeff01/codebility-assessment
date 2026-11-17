/** @jest-environment node*/

import { GET } from '../route';
import { posts } from '../../../../../data/posts';

describe('GET /api/posts/[id]', () => {
  test('returns a blog post with status 200 when given a valid ID', async () => {
    const response = await GET(
      {},
      { params: Promise.resolve({ id: '1' }) }
    );

    expect(response.status).toBe(200);

    const data = await response.json();

    expect(data).toEqual(posts[0]);
  })

  test('returns 404 when the blog post does not exist', async () => {
    const response = await GET(
      {},
      { params: Promise.resolve({ id: '999' }) }
    );

    expect(response.status).toBe(404);

    const data = await response.json();

    expect(data).toEqual({ error: 'Post not found' });
  });
})