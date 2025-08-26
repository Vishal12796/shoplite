import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import favouritesSlice from "./slice/favouritesSlice";
import productsSlice from "./slice/productsSlice";
import themeSlice from "./slice/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
  products: productsSlice,
  favourites: favouritesSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["theme", "products", "favourites"],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export { persistor, store };
