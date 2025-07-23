import React, { useState } from 'react';
import './App.css';

import UserList from './components/UserList';
import ProductGrid from './components/ProductGrid/ProductGrid';
import CommentList from './components/CommentList';
import DataTable from './components/DataTable';
import Accordion from './components/Accordion';
import FilterableList from './components/FilterableList';
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from './components/Tabs';
import StarRating from './components/StarRating';
import CategoryTree from './components/CategoryTree';

const App = () => {
  const [activeTask, setActiveTask] = useState('users');
  const [users, setUsers] = useState([
    { id: 1, name: 'Иван', email: 'ivan@example.com' },
    { id: 2, name: 'Петр', email: 'petr@example.com' },
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Товар 1', price: 100, rating: 4, image: 'https://via.placeholder.com/150', category: 'Электроника' },
    { id: 2, name: 'Товар 2', price: 200, rating: 5, image: 'https://via.placeholder.com/150', category: 'Одежда' },
    { id: 3, name: 'Товар 3', price: 300, rating: 3, image: 'https://via.placeholder.com/150', category: 'Электроника' },
  ]);
  const [comments, setComments] = useState([
    { author: 'Иван', text: 'Отличный товар!', date: '10.07.2025' },
    { author: 'Петр', text: 'Неплохо.', date: '11.07.2025' },
  ]);
  const [data, setData] = useState([
    { id: 1, name: 'Иван', age: 30, city: 'Москва' },
    { id: 2, name: 'Петр', age: 25, city: 'Санкт-Петербург' },
  ]);
  const [rating, setRating] = useState(3);
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Электроника',
            children: [
                { id: 2, name: 'Ноутбуки' },
                { id: 3, name: 'Телефоны' },
            ],
        },
        {
            id: 4,
            name: 'Одежда',
            children: [
                { id: 5, name: 'Мужская' },
                { id: 6, name: 'Женская' },
            ],
        },
    ]);
  <Breadcrumbs path={[
    { url: '#', label: 'Главная' },
    { url: '#', label: 'Категория' },
    { label: 'Товар' }
  ]} />
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const taskContent = () => {
    switch (activeTask) {
      case 'users':
        return <UserList users={users} onDeleteUser={handleDeleteUser} />;
      case 'products':
        return (
          <>
            <ProductGrid products={products} onAddToCart={handleAddToCart} />
            <div>
              Корзина: {cart.map(item => item.name).join(', ')}
            </div>
          </>
        );
      case 'comments':
        return <CommentList comments={comments} onAddComment={handleAddComment} />;
      case 'data':
        return <DataTable data={data} columns={['id', 'name', 'age', 'city']} />;
      case 'accordion':
        return <Accordion items={[
          { question: 'Вопрос 1', answer: 'Ответ 1' },
          { question: 'Вопрос 2', answer: 'Ответ 2' },
        ]} />;
      case 'filterable':
        return <FilterableList items={products} />;
      
  case 'breadcrumbs':
  console.log("Breadcrumbs path:", [
   { url: '#', label: 'Главная' },
   { url: '#', label: 'Категория' },
   { label: 'Товар' }
  ]);
  return (
   <Breadcrumbs
    path={[
     { url: '#', label: 'Главная' },
     { url: '#', label: 'Категория' },
     { label: 'Товар' }
    ]}
   />
  );
      case 'tabs':
        return <Tabs tabs={[
          { label: 'Вкладка 1', content: 'Контент 1' },
          { label: 'Вкладка 2', content: 'Контент 2' },
        ]} />;
      case 'rating':
        return <StarRating maxRating={5} rating={rating} onRatingChange={setRating} />;
      case 'categoryTree':
          return <CategoryTree categories={categories} />;
      default:
        return <div>Выберите задачу</div>;
    }
  };

  return (
    <div className="App">
      <div className="task-selector">
        <button onClick={() => setActiveTask('users')}>Пользователи</button>
        <button onClick={() => setActiveTask('products')}>Товары</button>
        <button onClick={() => setActiveTask('comments')}>Комментарии</button>
        <button onClick={() => setActiveTask('data')}>Таблица</button>
        <button onClick={() => setActiveTask('accordion')}>Аккордеон</button>
        <button onClick={() => setActiveTask('filterable')}>Фильтр</button>
        <button onClick={() => setActiveTask('breadcrumbs')}>Крошки</button>
        <button onClick={() => setActiveTask('tabs')}>Табы</button>
        <button onClick={() => setActiveTask('rating')}>Рейтинг</button>
        <button onClick={() => setActiveTask('categoryTree')}>Дерево категорий</button>
      </div>
      <div className="task-content">
        {taskContent()}
      </div>
    </div>
  );
};

export default App;
