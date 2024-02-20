import { configureStore } from "@reduxjs/toolkit";
import market from "./reducer/market";
import toggleSlice from "./reducer/toggleSlice";
import navMenuSlice from "./reducer/navMenuSlice";

export const store = configureStore({
  reducer: {
    market: market,
    toggle: toggleSlice,
    navToggle: navMenuSlice,
  },
});
