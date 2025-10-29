import { TypeAttributes } from "@/app/@types/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToastState = {
  type: TypeAttributes.Status;
  toastMessage: string;
};

export const SLICE_NAME = "toast";

const initialState: ToastState = {
  type: "info",
  toastMessage: "",
};

export const weatherSlice = createSlice({
  name: `${SLICE_NAME}/state`,
  initialState,
  reducers: {
    setToastType: (state, action: PayloadAction<ToastState["type"]>) => {
      state.type = action.payload;
    },
    setToastMessage: (
      state,
      action: PayloadAction<ToastState["toastMessage"]>
    ) => {
      state.toastMessage = action.payload;
    },
  },
});

export const { setToastType, setToastMessage } = weatherSlice.actions;
export default weatherSlice.reducer;
