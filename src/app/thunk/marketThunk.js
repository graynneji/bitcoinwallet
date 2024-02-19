import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchMarketStart,
  fetchMarketSuccess,
  fetchMarketFailure,
} from "../reducer/market";

import axios from "axios";

// const URL_MARKET = `${import.meta.env.REACT_URL}${
//   import.meta.env.REACT_MARKET
// }`;
// console.log(URL_MARKET);
export const marketData = createAsyncThunk(
  "market",
  async (_, { dispatch }) => {
    dispatch(fetchMarketStart(true));
    try {
      const response = await axios.get("http://localhost:3000/market");
      dispatch(fetchMarketSuccess(response.data));
    } catch (error) {
      dispatch(fetchMarketFailure(error.message));
    }
  }
);
