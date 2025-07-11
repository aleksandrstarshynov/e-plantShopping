import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cost for all items in the cart
  const calculateTotalAmount = () =>
    cart
      .reduce((sum, item) => {
        const price = typeof item.cost === 'string'
          ? parseFloat(item.cost.replace('$', ''))
          : item.cost;
        return sum + price * item.quantity;
      }, 0)
      .toFixed(2);

  // Calculate total number of items in the cart
  const calculateTotalCount = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate subtotal for a specific item
  const calculateTotalCost = (item) => {
    const price = typeof item.cost === 'string'
      ? parseFloat(item.cost.replace('$', ''))
      : item.cost;
    return (price * item.quantity).toFixed(2);
  };

  // Increase item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrease item quantity or remove if reaches zero
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Checkout button stub
  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-count">
        Total Items: {calculateTotalCount()}
      </h2>
      <h2 className="cart-title">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-cost">
                ${
                  (typeof item.cost === 'string'
                    ? parseFloat(item.cost.replace('$', ''))
                    : item.cost
                  ).toFixed(2)
                }
              </p>
              <div className="cart-item-quantity">
                <button
                  className="cart-btn"
                  onClick={() => handleDecrement(item)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="cart-btn"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <p className="cart-item-subtotal">
                Subtotal: ${calculateTotalCost(item)}
              </p>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="cart-actions">
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
