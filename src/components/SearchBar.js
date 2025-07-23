import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log('Поиск:', event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;