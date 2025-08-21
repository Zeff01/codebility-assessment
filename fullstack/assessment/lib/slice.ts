import { Post } from "@/types/posts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Post = {
  id: 0,
  title: "",
  content: "",
  excerpt: "",
  date: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post>) => {
      return action.payload;
    },
  },
});

export const postSliceAction = postSlice.actions;
