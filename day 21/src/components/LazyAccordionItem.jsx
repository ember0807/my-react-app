import React, { useState, useEffect } from 'react';
import '../styles/accordion.css'; // Общие стили

const LazyAccordionItem = ({ title, itemIndex, isOpen, onToggle }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Загружаем контент только если элемент открыт И контент еще не загружен
    if (isOpen && content === null && !isLoading && !error) {
      setIsLoading(true);
      setError(null); // Сброс ошибок при новой попытке

      // Имитация асинхронной загрузки контента
      // В реальном приложении здесь был бы fetch запрос к API
      setTimeout(() => {
        try {
          // Имитируем ошибку для демонстрации
           if (Math.random() < 0.3) { // 30% шанс на ошибку
             throw new Error(`Ошибка загрузки контента для "${title}"`);
           }

          // Фиктивный контент, который "загружается"
          const loadedContent = `Это контент для "${title}", загруженный асинхронно. `;
          setContent(loadedContent);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }, 1000); // Имитируем задержку в 1 секунду
    }
  }, [isOpen, content, isLoading, error, title]); // Зависимости useEffect

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        {title}
        <span className="accordion-icon">
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <div className="accordion-content-inner">
          {isLoading && <div className="loader">Загрузка контента...</div>}
          {error && <div className="error">Ошибка: {error.message}</div>}
          {!isLoading && !error && content && <p>{content}</p>}
          {!isLoading && !error && !content && isOpen && <p>Контент пока не загружен. Попробуйте снова.</p>}
        </div>
      </div>
    </div>
  );
};

export default LazyAccordionItem;