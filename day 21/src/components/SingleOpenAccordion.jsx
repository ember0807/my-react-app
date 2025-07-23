import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const SingleOpenAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Закрываем или открываем новый
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
          iconOpen="▲" // Кастомная иконка для открытого состояния
          iconClosed="▼" // Кастомная иконка для закрытого состояния
        />
      ))}
    </div>
  );
};

export default SingleOpenAccordion;