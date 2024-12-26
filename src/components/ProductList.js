// src/components/ProductList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../features/products/productSlice';
import EditProduct from './EditProduct'; // นำเข้า EditProduct

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  
  const [editingProduct, setEditingProduct] = useState(null); // สถานะสำหรับสินค้าที่ต้องการแก้ไข

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleEdit = (product) => {
    setEditingProduct(product); // เปิด modal หรือให้แสดงข้อมูลของสินค้าเพื่อแก้ไข
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* แสดงฟอร์ม EditProduct เมื่อมีการเลือกสินค้า */}
      {editingProduct && <EditProduct product={editingProduct} />}
    </div>
  );
};

export default ProductList;
