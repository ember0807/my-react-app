import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null); // Индекс открытого элемента

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Открыть/закрыть элемент
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id || index} // Используем id, если есть, иначе index
          title={item.title}
          description={item.description}
          codeExample={item.codeExample}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;