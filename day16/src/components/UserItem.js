import React from 'react';
import './UserItem.css'; // Импортируем CSS для отдельного элемента

const UserItem = ({ user, onDelete }) => {
  return (
    <li className="user-item"> {/* Добавляем класс .user-item */}
      <span>{user.name} - {user.email}</span> {/* Оборачиваем текст в span для лучшего контроля стилей */}
      <button
        className="component-button danger-button" // Используем общие классы из App.css
        onClick={() => onDelete(user.id)}
      >
        Удалить
      </button>
    </li>
  );
};

export default UserItem;