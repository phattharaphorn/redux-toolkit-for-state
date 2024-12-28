import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../features/products/productSlice';
import EditProduct from './EditProduct'; 

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  
  const [editingProduct, setEditingProduct] = useState(null); 

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleEdit = (product) => {
    setEditingProduct(product); 
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

      {editingProduct && <EditProduct product={editingProduct} />}
    </div>
  );
};

export default ProductList;
