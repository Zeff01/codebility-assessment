import { render, screen } from '@testing-library/react'
import Home from '../page'
import { posts } from '../../data/posts'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('Homepage', () => {
  test('renders all blog post titles', () => {
    render(<Home />);

    posts.forEach((post) => {
      expect(
        screen.getByRole('heading', { name: post.title })
      ).toBeInTheDocument();
    });
  });

  test('renders the correct link for each blog post', () => {
    render(<Home />)

    posts.forEach((post) => {
      const link = screen.getByRole('link', { name: new RegExp(`^${post.title}`) });
      expect(link).toHaveAttribute('href', `/posts/${post.id}`)
    })
  });
});

