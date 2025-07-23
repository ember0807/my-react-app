import React from 'react';

function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Notification;