import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">
          <img src="/assets/logo.png" alt="Paradise Nursery" />
          <div>
            <h3>Paradise Nursery</h3>
            <span>Where Green Meets Serenity</span>
          </div>
        </Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/products">Plants</Link></li>
        <li>
          <Link to="/cart" className="navbar__cart">
            🛒
            <span className="navbar__cart-count">{totalCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
