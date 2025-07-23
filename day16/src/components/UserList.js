import React from 'react';
import UserItem from './UserItem'; // Импортируем новый компонент
import './UserList.css'; // Импортируем CSS-файл для списка

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="user-list-container">
      <h2>Список пользователей</h2>
      <ul className="user-list">
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onDelete={onDeleteUser} // Передаем функцию удаления
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;