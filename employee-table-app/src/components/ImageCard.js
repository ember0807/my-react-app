import React from 'react';
import './ImageCard.css';

function ImageCard({ image, onClick }) {
  return (
    <div className="image-card" onClick={() => onClick(image)}>
      <img src={image.thumbnailUrl} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
}

export default ImageCard;