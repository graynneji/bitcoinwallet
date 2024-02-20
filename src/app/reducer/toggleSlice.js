import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = toggleSlice.actions;

export default toggleSlice.reducer;
