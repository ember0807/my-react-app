const codeDocumentationItems = [
  {
    id: 1,
    title: 'useState Hook',
    description: 'Хук React для добавления состояния в функциональные компоненты. Возвращает пару: текущее значение состояния и функцию для его обновления.',
    codeExample: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Счет: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Увеличить</button>\n    </div>\n  );\n}`,
  },
  {
    id: 2,
    title: 'useEffect Hook',
    description: 'Хук React для выполнения побочных эффектов в функциональных компонентах (например, запросы к API, подписки).',
    codeExample: `import React, { useState, useEffect } from 'react';\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/todos/1')\n      .then(response => response.json())\n      .then(json => setData(json));\n  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз\n\n  return (\n    <div>\n      {data ? <p>Данные: {data.title}</p> : <p>Загрузка...</p>}\n    </div>\n  );\n}`,
  },
  {
    id: 3,
    title: 'fetch API',
    description: 'Встроенный в браузер API для выполнения сетевых запросов. Возвращает Promise.',
    codeExample: `fetch('https://api.github.com/users/github')\n  .then(response => response.json())\n  .then(data => console.log(data.login))\n  .catch(error => console.error('Ошибка:', error));\n\n// Использование async/await:\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.github.com/users/octocat');\n    const data = await response.json();\n    console.log(data.login);\n  } catch (error) {\n    console.error('Ошибка:', error);\n  }\n}`,
  },
];

export default codeDocumentationItems;