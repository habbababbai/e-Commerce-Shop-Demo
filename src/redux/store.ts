import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { shopApi } from "../features/shopAPI/shopAPI";
import localCartReducer from "../features/localCart/localCart";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// our redux store holding cart state and API

const persistConfig = {
    key: "root",
    storage: storage,
};

export const rootReducers = combineReducers({
    [shopApi.reducerPath]: shopApi.reducer,
    localCart: localCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }).concat(shopApi.middleware),
});

//setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
