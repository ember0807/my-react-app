import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import './ImageGallery.css';

// Импортируем статичные изображения
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';

function ImageGallery() {
  const [images] = useState([
    { id: 1, title: 'Закат', thumbnailUrl: image1, fullSizeUrl: image1 },
    { id: 2, title: 'Горы', thumbnailUrl: image2, fullSizeUrl: image2 },
    { id: 3, title: 'Океан', thumbnailUrl: image3, fullSizeUrl: image3 },
    { id: 4, title: 'Осенний лес', thumbnailUrl: image4, fullSizeUrl: image4 },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-grid">
        {images.map(image => (
          <ImageCard key={image.id} image={image} onClick={handleCardClick} />
        ))}
      </div>
      <Modal
        imageUrl={selectedImage ? selectedImage.fullSizeUrl : null}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ImageGallery;