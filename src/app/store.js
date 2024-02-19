import { configureStore } from "@reduxjs/toolkit";
import market from "./reducer/market";

export const store = configureStore({
  reducer: {
    market: market,
  },
});
