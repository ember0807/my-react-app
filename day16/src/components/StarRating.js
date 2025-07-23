import React, { useState } from 'react';
import './StarRating.css';
const StarRating = ({ maxRating, initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating); // Сообщаем родительскому компоненту об изменении рейтинга
    }
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(starValue)}
            style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray', fontSize: '24px' }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;