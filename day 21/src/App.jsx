import React from 'react';
import './App.css'; // Общие стили для App

// Импортируем компоненты аккордеонов
import SimpleAccordion from './components/SimpleAccordion';
import MultiAccordion from './components/MultiAccordion';
import SingleOpenAccordion from './components/SingleOpenAccordion';
import ApiAccordion from './components/ApiAccordion';
import CustomAccordion from './components/CustomAccordion';
import TreeAccordion from './components/TreeAccordion';
import LazyLoadAccordion from './components/LazyLoadAccordion';
import OptimizedAccordion from './components/OptimizedAccordion';
import SortableAccordion from './components/SortableAccordion';

function App() {
  const simpleAccordionItems = [
    { title: "Что такое React?", content: "React - это JavaScript библиотека для создания пользовательских интерфейсов." },
    { title: "Что такое компоненты?", content: "Компоненты - это независимые, переиспользуемые части UI." },
    { title: "Зачем нужны хуки?", content: "Хуки позволяют использовать состояние и другие возможности React в функциональных компонентах." },
  ];

  const multiAccordionItems = [
    { title: "Вопрос 1: Разделяй и властвуй?", content: "Да, это принцип разбиения больших задач на маленькие, управляемые части." },
    { title: "Вопрос 2: Могут ли компоненты общаться?", content: "Да, через пропсы (сверху вниз) или контекст/Redux (для глобального состояния)." },
    { title: "Вопрос 3: Что такое виртуальный DOM?", content: "Это легковесная копия настоящего DOM, используемая React для оптимизации обновлений." },
  ];

  const customAccordionData = [
    { id: 'custom-1', title: "Кастомный элемент 1", content: "Этот аккордеон имеет поиск и смену темы." },
    { id: 'custom-2', title: "Кастомный элемент 2", content: "Попробуйте ввести 'тема' в поиск." },
    { id: 'custom-3', title: "Кастомный элемент 3", content: "Перетаскивание здесь пока отключено (но это возможно!)." },
  ];

  const treeData = [
    {
      title: "Проекты",
      children: [
        { title: "Веб-сайты",
          children: [
            { title: "Портфолио", content: "Мой личный сайт-портфолио на React." },
            { title: "Интернет-магазин", content: "Проект по созданию E-commerce платформы." },
          ]
        },
        { title: "Мобильные приложения",
          children: [
            { title: "To-Do App", content: "Простое приложение для управления задачами." },
          ]
        },
      ],
    },
    {
      title: "Документы",
      children: [
        { title: "Отчеты",
          children: [
            { title: "Годовой отчет 2024.pdf", content: "Сводный отчет за 2024 год." },
            { title: "Ежемесячный отчет Июль.docx", content: "Последний ежемесячный отчет." },
          ]
        },
        { title: "Планы", content: "Планы на следующий квартал." },
      ],
    },
    { title: "Обо мне", content: "Немного информации о разработчике." },
  ];
  const lazyLoadItems = [
    { title: "Элемент 1 (загрузка по требованию)" },
    { title: "Элемент 2 (загрузка по требованию)" },
    { title: "Элемент 3 (загрузка по требованию)" },
  ];
  // Генерируем 200 элементов для демонстрации виртуализации
  const largeAccordionItems = Array.from({ length: 200 }, (_, i) => ({
    title: `Элемент ${i + 1}`,
    content: `Это контент для элемента №${i + 1}. Он может быть очень длинным, но виртуализация поможет.`
  }));

  const sortableItems = [
    { id: 's1', title: "Перетаскиваемый элемент 1", content: "Перетащи меня!" },
    { id: 's2', title: "Перетаскиваемый элемент 2", content: "бла бла бла." },
    { id: 's3', title: "Перетаскиваемый элемент 3", content: "Dnd-kit ." },
  ];

  return (
    <div className="App">
      <h1>Задания по React Аккордеонам</h1>

      <h2>1. Простой аккордеон</h2>
      <SimpleAccordion items={simpleAccordionItems} />

      <hr />

      <h2>2. Множественный аккордеон</h2>
      <MultiAccordion items={multiAccordionItems} />

      <hr />

      <h2>3. Аккордеон с одним открытым элементом</h2>
      <SingleOpenAccordion items={simpleAccordionItems} /> 

      <hr />

      <h2>4. Аккордеон с загрузкой данных из API</h2>
      <ApiAccordion />

      <hr />

      <h2>5. Кастомный аккордеон</h2>
      <CustomAccordion initialItems={customAccordionData} />

      <hr />

      <h2>6. Аккордеон с деревом (вложенные элементы)</h2>
      <TreeAccordion data={treeData} />

      <hr />

      <h2>7. Аккордеон с асинхронной загрузкой контента</h2>
      <LazyLoadAccordion items={lazyLoadItems} />

      <hr />

      <h2>8. Оптимизированный аккордеон для больших списков</h2>
      <OptimizedAccordion items={largeAccordionItems} />

      <h2>9. Аккордеон с возможностью сортировки перетаскиванием</h2>
      <SortableAccordion initialItems={sortableItems} />

    </div>
  );
}

export default App;