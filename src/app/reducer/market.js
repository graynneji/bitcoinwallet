import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  market: [],
  changeMarket: [
    {
      time: "Week",
      btcToUsd: 3.674,
      lower: 2.923,
      higher: 5.984,
    },
  ],
  error: false,
};

const loadMarket = createSlice({
  name: "market",
  initialState,
  reducers: {
    fetchMarketStart: (state) => {
      state.loading = true;
    },

    fetchMarketSuccess: (state, action) => {
      state.loading = false;
      state.market = action.payload;
    },

    fetchMarketFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    changedMarket: (state, action) => {
      const changedMarValue = action.payload;

      state.changeMarket = state.market.filter(
        (chaMar) => chaMar.time === changedMarValue
      );
    },
  },
});

export const {
  fetchMarketStart,
  fetchMarketSuccess,
  fetchMarketFailure,
  changedMarket,
} = loadMarket.actions;
export default loadMarket.reducer;
