import { apiCall } from "@/apiManager/apiCall";
import { Api, ApiType } from "@/apiManager/apiConst";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "app/getProducts",
  async (payload, { rejectWithValue, dispatch }) => {
    const payloadData = {
      ...(typeof payload === "object" && payload !== null ? payload : {}),
      endpoint: Api.products,
      type: ApiType.get,
    };
    return apiCall(payloadData, rejectWithValue, dispatch);
  },
);
