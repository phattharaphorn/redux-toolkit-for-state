// src/components/EditProduct.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/products/productSlice';

const EditProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // เมื่อได้รับ props ใหม่ (product) ให้ตั้งค่าชื่อและราคา
  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      dispatch(updateProduct({ id: product.id, name, price }));
    }
  };

  if (!product) return null; // ถ้าไม่มีสินค้าให้แสดง

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
