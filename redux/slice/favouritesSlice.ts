import { Product } from "@/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavouriteState = {
  favouritesList: Product[]; // store products
};

const initialState: FavouriteState = {
  favouritesList: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exists = state.favouritesList.find((p) => p.id === product.id);
      if (exists) {
        state.favouritesList = state.favouritesList.filter(
          (p) => p.id !== product.id,
        );
      } else {
        state.favouritesList.push(product);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
