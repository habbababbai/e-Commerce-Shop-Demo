import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { shopApi } from "../features/shopAPI/shopAPI";
import localCartReducer from "../features/localCart/localCart";

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        localCart: localCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
