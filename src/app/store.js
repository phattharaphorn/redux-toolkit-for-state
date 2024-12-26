// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer, // เพิ่ม productReducer ลงใน store
  },
});

export default store;
