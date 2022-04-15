/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addOneToBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      if (index >= 0) {
        state.items[index].number += 1;
        state.count++;
      }
    },
    removeOneFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      if (index >= 0) {
        state.items[index].number -= 1;
        state.count--;
      }
    },
    addToBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index >= 0) {
        // If the item is already in the basket, we just increment the quantity
        state.items[index].number += 1;
      } else {
        // If the item is not in the basket, we add it to the basket
        action.payload.number = 1;
        state.items = [...state.items, action.payload];
      }
      state.count++;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
        state.count--;
      } else {
        console.warn(`Cannot remove product (id: ${action.payload.id}) as it's not in the basket!`);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket, addOneToBasket, removeOneFromBasket } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = state => state.basket.items;

export const selectCount = state => state.basket.count;

export const selectTotal = state =>
  state.basket.items.reduce((total, item) => total + item.price * item.number, 0);

export default basketSlice.reducer;
