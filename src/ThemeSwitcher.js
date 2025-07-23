import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; // Стиль для переключателя
import './Themes.css'; // Основные стили для тем

function ThemeSwitcher() {
  // Инициализируем состояние темы из localStorage, если она там сохранена
  // Иначе, по умолчанию 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // useEffect для применения темы к элементу body
  useEffect(() => {
    document.body.className = theme; // Применяем класс 'light' или 'dark' к body
    localStorage.setItem('theme', theme); // Сохраняем выбранную тему в localStorage
  }, [theme]); // Эффект срабатывает при изменении theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-switcher-container">
      <h2>Смена темы</h2>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Переключить на {theme === 'light' ? 'Темную' : 'Светлую'} тему
      </button>
    </div>
  );
}

export default ThemeSwitcher;