import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtendedItem } from "../../common/item";

// Because of the fact we are using dummy API for this project to which we
// can't actually add data, cart is stored locally
// Below are local cart reducers

const initialState: ExtendedItem[] = [];

export const localCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (
            state: ExtendedItem[],
            action: PayloadAction<ExtendedItem>
        ) => {
            // when adding new item to cart we need to check if this item
            // is not already there
            // afterwards we 
            const itemId = action.payload.id;
            if (state.find((item) => item.id === itemId)) {
                const index = state.findIndex((item) => item.id === itemId);
                const newState = state;
                newState[index].count += action.payload.count;
                if (newState[index].count > 20) newState[index].count = 20;
                return newState;
            }
            return [...state, action.payload];
        },
        removeItem: (
            state: ExtendedItem[],
            action: PayloadAction<ExtendedItem>
        ) => {
            return state.filter((i) => i.id !== action.payload.id);
        },
    },
});

export const { addItem, removeItem } = localCartSlice.actions;

export default localCartSlice.reducer;
