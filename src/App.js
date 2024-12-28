import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct'; 

function App() {
  const product = { id: 1, name: 'Product 1', price: 100 }; 

  return (
    <div>
      <h1>Product Management</h1>
      <AddProduct />
      <ProductList />
      <EditProduct product={product} />
    </div>
  );
}

export default App;
