import React from 'react';

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Возраст: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserCard;