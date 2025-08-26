import { Product } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../thunkActions";

type ProductsSliceState = {
  products: Product[];
};

const initialState: ProductsSliceState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action?.payload || [];
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
