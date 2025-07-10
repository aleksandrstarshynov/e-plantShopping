import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import './App.css';

// Landing page content as a component
const LandingPage = () => (
  <div className="landing-page">
    <div className="background-image" />
    <div className="content">
      <h1>Welcome To Paradise Nursery</h1>
      <div className="divider" />
      <p>Where Green Meets Serenity</p>
      <Link to="/products" className="get-started-button">
        Get Started
      </Link>
      <AboutUs />
    </div>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem onContinueShopping={() => {}} />} />
      </Routes>
    </div>
  );
}

export default App;
