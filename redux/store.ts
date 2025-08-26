import storage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import themeSlice from "./slice/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["theme"],
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

export { persistor, store };
