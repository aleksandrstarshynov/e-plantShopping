import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
