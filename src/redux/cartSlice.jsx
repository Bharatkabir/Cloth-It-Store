import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addToCart(state, action) {
      const item = state.find((cartItem) => cartItem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveState(state);
    },
    deleteFromCart(state, action) {
      const itemId = action.payload.id;
      const index = state.findIndex((cartItem) => cartItem.id === itemId);
      if (index !== -1) {
        state.splice(index, 1);
        saveState(state);
      }
    },
    incrementQuantity(state, action) {
      const item = state.find((cartItem) => cartItem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        saveState(state);
      }
    },
    decrementQuantity(state, action) {
      const item = state.find((cartItem) => cartItem.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveState(state);
      }
    },
    clearCart(state) {
      state = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
