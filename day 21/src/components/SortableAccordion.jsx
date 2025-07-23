import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AccordionItem from './AccordionItem';
import '../styles/accordion.css';

// Компонент, который делает AccordionItem перетаскиваемым
const SortableAccordionItem = ({ item, index, activeIndex, handleToggle, id, isDragging }) => { // Добавили isDragging
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Дополнительные стили для перетаскивания, если нужно
    zIndex: id === activeIndex ? 10 : 'auto', // Поднимаем активный элемент
    // Временно отключаем CSS-переход для max-height, если идёт перетаскивание что бы не было проблем с открытием из за конфликта
    pointerEvents: isDragging ? 'none' : 'auto', // Отключаем события на элементе, пока его тащат
    // Если content внутри AccordionItem использует transition, нужно это учесть
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <AccordionItem
        title={item.title}
        content={item.content}
        isOpen={activeIndex === index}
        onToggle={() => handleToggle(index)}
        disableContentTransition={isDragging}
        // Можно передать свойство для отключения transition внутри AccordionItem
      />
    </div>
  );
};

const SortableAccordion = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems.map((item, idx) => ({ ...item, id: item.id || `item-${idx}` })));
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Новое состояние для отслеживания перетаскивания

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleDragStart = () => { // Обработчик начала перетаскивания
    setIsDragging(true);
  };

  const handleDragEnd = (event) => { // Обработчик завершения перетаскивания
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);
        return newItems;
      });
    }
    setIsDragging(false); // Завершаем перетаскивание
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart} // Добавляем обработчик начала
      onDragEnd={handleDragEnd}     // Добавляем обработчик завершения
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="accordion-container">
          {items.map((item, index) => (
            <SortableAccordionItem
              key={item.id}
              id={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
              isDragging={isDragging} // Передаем состояние перетаскивания
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableAccordion;