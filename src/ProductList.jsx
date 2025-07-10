import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    name: 'Snake Plant',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
    description: 'Low maintenance, great for beginners.',
    cost: 25.0,
  },
  {
    name: 'Spider Plant',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
    description: 'Filters formaldehyde and xylene from the air.',
    cost: 12.0,
  },
  {
    name: 'Peace Lily',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
    description: 'Removes mold spores and purifies the air.',
    cost: 18.0,
  },
  {
    name: 'Boston Fern',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
    description: 'Adds humidity to the air and removes toxins.',
    cost: 20.0,
  },
  {
    name: 'Rubber Plant',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
    description: 'Easy to care for and effective at removing toxins.',
    cost: 17.0,
  },
  {
    name: 'Aloe Vera',
    category: 'Air Purifying',
    image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
    description: 'Purifies the air and has healing properties for skin.',
    cost: 14.0,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <header className="product-list-header">
        <h2>Our Plants</h2>
        <div className="cart-summary">Items in Cart: {totalCount}</div>
      </header>

      <div className="product-grid">
        {plantsArray.map(plant => (
          <div key={plant.name} className="product-card">
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />
            <h3 className="product-name">{plant.name}</h3>
            <p className="product-desc">{plant.description}</p>
            <p className="product-cost">${plant.cost.toFixed(2)}</p>
            <button
              className="add-btn"
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]}
            >
              {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
