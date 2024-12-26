// src/App.js
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct'; // เก็บไว้ใช้งานในอนาคต

function App() {
  // สมมติว่าเรามีสินค้าใน state ที่ต้องการแก้ไข
  const product = { id: 1, name: 'Product 1', price: 100 }; // ตัวอย่างสินค้า

  return (
    <div>
      <h1>Product Management</h1>
      <AddProduct />
      <ProductList />
      {/* แสดงคอมโพเนนต์ EditProduct */}
      <EditProduct product={product} />
    </div>
  );
}

export default App;
