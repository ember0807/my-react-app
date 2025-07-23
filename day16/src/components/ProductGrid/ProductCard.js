import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const renderStars = (rating) => {
    const fullStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    return fullStars + emptyStars;
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
      <h3>{product.name}</h3>
      <p>Цена: {product.price}</p>
      <p>Рейтинг: {renderStars(product.rating)}</p>
      <button onClick={() => onAddToCart(product)}>В корзину</button>
    </div>
  );
};

export default ProductCard;