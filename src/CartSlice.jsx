import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the cart
const initialState = {
  items: [] // each item: { name, image, description, cost, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant to the cart or increases its quantity if already present
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.name === plant.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1
        });
      }
    },

    // Removes a plant entirely from the cart by name
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    // Updates the quantity of a specific plant in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    }
  }
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to include in the store
export default cartSlice.reducer;
