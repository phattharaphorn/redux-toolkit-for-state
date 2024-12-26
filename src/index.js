// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // เปลี่ยนการนำเข้า
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

// ค้นหาตัวเลือก root ของ DOM ที่จะเรนเดอร์แอป
const root = ReactDOM.createRoot(document.getElementById('root'));

// ใช้ createRoot แทน render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
