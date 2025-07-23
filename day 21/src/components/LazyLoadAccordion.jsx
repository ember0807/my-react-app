import React, { useState } from 'react';
import LazyAccordionItem from './LazyAccordionItem'; // Используем новый компонент

const LazyLoadAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Открываем только один элемент

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <LazyAccordionItem
          key={index}
          title={item.title}
          itemIndex={index} // Передаем индекс для уникальности
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default LazyLoadAccordion;