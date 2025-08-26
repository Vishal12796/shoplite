import { Product } from "@/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavouriteState = {
  favourites: Product[]; // store products
};

const initialState: FavouriteState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exists = state.favourites.find((p) => p.id === product.id);
      if (exists) {
        state.favourites = state.favourites.filter((p) => p.id !== product.id);
      } else {
        state.favourites.push(product);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
