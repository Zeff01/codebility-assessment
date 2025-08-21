"use client";

import { postSlice } from "@/lib/slice";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
