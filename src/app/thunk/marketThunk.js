import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMarketStart,
  fetchMarketSuccess,
  fetchMarketFailure,
} from "../reducer/market";

import axios from "axios";

export const marketData = createAsyncThunk(
  "market",
  async (_, { dispatch }) => {
    dispatch(fetchMarketStart(true));
    try {
      const response = await axios.get(
        "https://json-server-vercel-lovat-nine.vercel.app/market"
      );
      dispatch(fetchMarketSuccess(response.data));
    } catch (error) {
      dispatch(fetchMarketFailure(error.message));
    }
  }
);
