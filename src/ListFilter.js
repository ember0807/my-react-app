import React, { useState } from 'react';
import './ListFilter.css';

const initialItems = [
  'Яблоки',
  'Груши',
  'Бананы',
  'Апельсины',
  'Мандарины',
  'Виноград',
  'Арбузы',
  'Дыни'
];

function ListFilter() {
  const [searchTerm, setSearchTerm] = useState(''); // Состояние для текста поиска

  // Фильтрация списка на основе searchTerm
  const filteredItems = initialItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-filter">
      <h2>Поиск по списку</h2>
      <input
        type="text"
        placeholder="Начните вводить для поиска..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="filtered-list">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {filteredItems.length === 0 && (
          <p className="no-results">Ничего не найдено.</p>
        )}
      </ul>
    </div>
  );
}

export default ListFilter;