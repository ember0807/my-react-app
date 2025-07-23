import React, { useState, useCallback } from 'react';
import { FixedSizeList } from 'react-window';
import AccordionItem from './AccordionItem'; // Используем базовый AccordionItem
import '../styles/accordion.css'; // Общие стили

const ROW_HEIGHT = 180; // Приблизительная высота одного элемента аккордеона (заголовок + небольшой контент)

const OptimizedAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Открываем только один элемент

  const handleToggle = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);

  // Этот компонент будет рендериться FixedSizeList для каждой "строки"
  const Row = ({ index, style }) => {
    const item = items[index];
    const isOpen = activeIndex === index;

    // Важно: style передается от react-window и должен быть применен к корневому элементу строки
    return (
      <div style={style}>
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={isOpen}
          onToggle={() => handleToggle(index)}
        />
      </div>
    );
  };

  return (
    <div className="accordion-container">
      <h3>Оптимизированный аккордеон (100+ элементов)</h3>
      <FixedSizeList
        height={400} // Общая высота видимой области списка
        itemCount={items.length} // Общее количество элементов
        itemSize={ROW_HEIGHT} // Высота каждого элемента
        width="100%" // Ширина списка
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default OptimizedAccordion;