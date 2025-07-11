import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    // 'cart' slice is managed by cartReducer
    cart: cartReducer,
  },
});

export default store;