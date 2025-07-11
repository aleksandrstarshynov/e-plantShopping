import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  { name: 'Snake Plant', category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Low maintenance, great for beginners.', cost: 25.0 },
  { name: 'Spider Plant', category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from the air.', cost: 12.0 },
  { name: 'Lavender', category: 'Aromatic Fragrant Plants', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3', description: 'Calming scent, used in aromatherapy.', cost: 20.0 },
  { name: 'Jasmine', category: 'Aromatic Fragrant Plants', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3', description: 'Sweet fragrance, promotes relaxation.', cost: 18.0 },
  { name: 'Aloe Vera', category: 'Medicinal Plants', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies the air and has healing properties for skin.', cost: 14.0 },
  { name: 'Echinacea', category: 'Medicinal Plants', image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg', description: 'Boosts immune system, helps fight colds.', cost: 16.0 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [addedToCart, setAddedToCart] = useState({});

  const grouped = plantsArray.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

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

      {Object.entries(grouped).map(([category, plants]) => (
        <section key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="product-grid">
            {plants.map(plant => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
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
        </section>
      ))}
    </div>
  );
};

export default ProductList;
