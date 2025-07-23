import React, { useState } from 'react';
import './Modal.css'; // Создадим файл стилей

function Modal() {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modal-container">
      <h2>Модальное окно</h2>
      <button onClick={openModal} className="open-modal-btn">Открыть модальное окно</button>

      {/* Условный рендеринг: показываем модальное окно только если isOpen === true */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Предотвращаем закрытие при клике внутри окна */}
            <h3>Заголовок модального окна</h3>
            <p>Я модальное окно со мной весело.</p>
            <button onClick={closeModal} className="close-modal-btn">Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;