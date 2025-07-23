import React, { useState, createContext, useContext } from 'react';
import AccordionItem from './AccordionItem'; // Используем наш общий AccordionItem
import '../styles/custom-accordion.css'; // Стили для этой версии аккордеона

// Создаем контекст для управления темой
const ThemeContext = createContext(null);

// Компонент для переключения темы
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
    </button>
  );
};

const CustomAccordion = ({ initialItems }) => {
  // Для поиска
  const [items] = useState(initialItems); // Исходные данные
  const [searchTerm, setSearchTerm] = useState('');

  // Для возможности открывать несколько элементов
  const [openIndexes, setOpenIndexes] = useState([]);

  // Для темной/светлой темы
  const [theme, setTheme] = useState('light'); // 'light' или 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Закрываем
    } else {
      setOpenIndexes([...openIndexes, index]); // Открываем
    }
  };

  // Фильтруем элементы на основе поискового запроса
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Оборачиваем все в ThemeContext.Provider, чтобы дочерние элементы могли получить доступ к теме
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Применяем класс темы к родительскому div, который будет влиять на CSS-переменные */}
      <div className={`custom-accordion-wrapper ${theme}`}>
        <ThemeToggle /> {/* Кнопка переключения темы */}

        {/* Поле поиска */}
        <input
          type="text"
          placeholder="Поиск по заголовкам и контенту..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Рендеринг отфильтрованных элементов аккордеона */}
        <div className="accordion-container">
          {filteredItems.map((item, index) => (
            <AccordionItem
              key={index} // Используем индекс, так как порядок может меняться при фильтрации
              title={item.title}
              content={item.content}
              isOpen={openIndexes.includes(index)} // Проверяем, открыт ли этот элемент
              onToggle={() => handleToggle(index)}
            />
          ))}
          {filteredItems.length === 0 && (
            <p className="no-results">Ничего не найдено.</p>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default CustomAccordion;