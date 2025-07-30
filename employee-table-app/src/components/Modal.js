import React from 'react';
import './Modal.css'; 

function Modal({ imageUrl, onClose }) {
  if (!imageUrl) return null; // Не рендерим модальное окно, если нет изображения

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}> {/* Предотвращаем закрытие при клике внутри */}
        <button className="modal-close-button" onClick={onClose}>×</button>
        <img src={imageUrl} alt="Full size" />
      </div>
    </div>
  );
}

export default Modal;