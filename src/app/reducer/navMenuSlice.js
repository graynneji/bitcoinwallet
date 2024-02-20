import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const NavMenuSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    NavMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { NavMenu } = NavMenuSlice.actions;

export default NavMenuSlice.reducer;
