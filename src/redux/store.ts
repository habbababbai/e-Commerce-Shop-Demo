import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { shopApi } from "../features/shopAPI/shopAPI";
import localCartReducer from "../features/localCart/localCart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: [shopApi.reducerPath],
};

// our redux store holding cart state and API

const persistedReducer = persistReducer(persistConfig, localCartReducer);

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        localCart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }).concat(shopApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
