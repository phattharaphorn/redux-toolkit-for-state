import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
      <h3>Total Quantity: {cart.totalQuantity}</h3>
      <h3>Total Price: ${cart.totalPrice}</h3>
    </div>
  );
};

export default Cart;
