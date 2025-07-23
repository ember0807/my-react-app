/*import React from 'react';
import RegistrationForm from './RegistrationForm';
import Stopwatch from './Stopwatch';
import ListFilter from './ListFilter';
import Modal from './Modal';
import ThemeSwitcher from './ThemeSwitcher';

import './Themes.css'; // Импортируем стили тем
import './App.css'; // для общих стилей и новой сетки

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Демонстрация React Заданий</h1>
        <ThemeSwitcher /> {/* Переключатель темы, можно оставить сверху *//*}
      </header>

      {/* Новый контейнер для сетки 3x3 *//*}
      <div className="components-grid">
        <RegistrationForm />
        <Stopwatch />
        <ListFilter />
        <Modal />
        </div>
    </div>
  );
}

export default App;*/
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Product from './components/Product';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import LoginForm from './components/LoginForm';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import StudentList from './components/StudentList';
import Timer from './components/Timer';
import WindowSize from './components/WindowSize';
import Greeting from './components/Greeting';
import Notification from './components/Notification';

function App() {
  const todos = ["Купить хлеб", "Сделать домашнее задание", "Позвонить другу"];
  const students = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
    { id: 3, name: "Петр" },
  ];

  return (
    <div className="container"> {/* Используем классы Bootstrap */}
      <Header />
      <UserCard name="John Doe" age={30} email="john.doe@example.com" />
      <Product title="Ноутбук" price={1200} description="Мощный ноутбук для работы и игр" />
      <Counter />
      <ToggleButton />
      <LoginForm />
      <SearchBar />
      <TodoList todos={todos} />
      <StudentList students={students} />
      <Timer />
      <WindowSize />
      <Greeting isAdmin={true} />
      <Notification message="У вас новое сообщение!" />
      <Footer />
    </div>
  );
}

export default App;