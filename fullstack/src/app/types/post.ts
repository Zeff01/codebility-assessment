export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export interface CreatePostData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
