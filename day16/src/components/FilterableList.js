import React, { useState, useMemo } from 'react';
import './FilterableList.css';
const ListItem = ({ item }) => {
  return <li>{item.name}</li>; //  Замените на более сложный рендеринг элемента
};

const FilterableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredItems = useMemo(() => {
      let result = items;

      if (searchTerm) {
          result = result.filter(item =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
      }

      if (category !== 'all') {
          result = result.filter(item => item.category === category);
      }

      return result;
  }, [items, searchTerm, category]);



  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">Все категории</option>
        <option value="category1">Категория 1</option>
        <option value="category2">Категория 2</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;