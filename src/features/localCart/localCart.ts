import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../common/item";

// Because of the fact we are using dummy API for this project to which we
// can't actually add data, cart is stored locally
// There go local cart reducers

const initialState: Item[] = [];

export const localCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state: Item[], action: PayloadAction<Item>) => {
            return [...state, action.payload];
        },
        removeItem: (state: Item[], action: PayloadAction<Item>) => {
            return state.filter((i) => i.id !== action.payload.id);
        },
    },
});

export const { addItem, removeItem } = localCartSlice.actions;

export default localCartSlice.reducer;
