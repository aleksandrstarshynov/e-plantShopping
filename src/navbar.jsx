import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  };

  const cartCountStyle = {
    marginLeft: '5px',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Paradise Nursery logo"
            style={{ height: '40px', marginRight: '8px' }}
          />
          <div>
            <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
            <span style={{ fontStyle: 'italic' }}>Where Green Meets Serenity</span>
          </div>
        </Link>
      </div>
      <div>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/products" style={linkStyle}>
          Plants
        </NavLink>
        <Link to="/cart" style={{ ...linkStyle, position: 'relative' }}>
          🛒
          {totalCount > 0 && <span style={cartCountStyle}>{totalCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
