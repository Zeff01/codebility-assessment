import axios from "axios";
import { Posts } from "@/data/posts";
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
//interfaces
export interface GetAllPostResponse {
  success: boolean;
  message: string;
  posts: Posts[];
}
interface getPostByIdResponse {
  success: boolean;
  message: string;
  post: Posts;
}
//api calls
//get all posts
export const getAllPosts = () => api.get<GetAllPostResponse>("/posts");
//get a specific posts
export const getPostById = (id: number) =>
  api.get<getPostByIdResponse>(`/posts/${id}`);
