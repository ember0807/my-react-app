import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import '../styles/accordion.css'; // Для лоадера и ошибок

const ApiAccordion = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // Для простого поведения аккордеона
  const apiKey = '86c707ee8df7a15e2ea7a98b25b2e096'; // API ключ
  const city = 'Москва'; // Можете изменить на необходимый город

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const formattedItem = {
          title: `Погода в ${data.name}`,
          content: `Температура: ${data.main.temp} °C\nОписание: ${data.weather[0].description}`,
        };
        setItems([formattedItem]); // Устанавливаем данные о погоде как первый элемент
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return <div className="loader">Загрузка данных...</div>;
  }

  if (error) {
    return <div className="error">Ошибка загрузки: {error.message}</div>;
  }

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ApiAccordion;