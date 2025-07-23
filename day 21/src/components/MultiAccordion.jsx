import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const MultiAccordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]); // Массив для открытых индексов

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index)); // Закрываем
    } else {
      setOpenIndexes([...openIndexes, index]); // Открываем
    }
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)} // Проверяем, есть ли индекс в массиве
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default MultiAccordion;