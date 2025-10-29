import { createSlice } from "@reduxjs/toolkit";

export type WeatherState = {
  counter: number;
};

export const SLICE_NAME = "weather";

const initialState: WeatherState = {
  counter: 0,
};

export const weatherSlice = createSlice({
  name: `${SLICE_NAME}/state`,
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = weatherSlice.actions;
export default weatherSlice.reducer;
