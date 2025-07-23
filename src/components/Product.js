import React from 'react';

function Product({ title, price, description }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Цена: {price}</p>
      <p>Описание: {description}</p>
    </div>
  );
}

export default Product;