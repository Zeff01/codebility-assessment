import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isModalOpen: boolean;
  modalType: "create" | "edit" | "delete" | null;
  selectedTodoId: string | null;
  toast: {
    message: string;
    type: "success" | "error" | "info";
  } | null;
}

const initialState: UIState = {
  isModalOpen: false,
  modalType: null,
  selectedTodoId: null,
  toast: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        type: "create" | "edit" | "delete";
        todoId?: string;
      }>
    ) => {
      state.isModalOpen = true;
      state.modalType = action.payload.type;
      state.selectedTodoId = action.payload.todoId || null;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.selectedTodoId = null;
    },
    showToast: (
      state,
      action: PayloadAction<{ message: string; type: "success" | "error" | "info" }>
    ) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

export const { openModal, closeModal, showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;

// Selectors
export const selectIsModalOpen = (state: any) => state.ui.isModalOpen;
export const selectModalType = (state: any) => state.ui.modalType;
export const selectSelectedTodoId = (state: any) => state.ui.selectedTodoId;
export const selectToast = (state: any) => state.ui.toast;
