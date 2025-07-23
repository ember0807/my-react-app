import React from 'react';

function Greeting({ isAdmin }) {
  return (
    <div>
      {isAdmin ? "Привет, админ!" : "Привет, гость!"}
    </div>
  );
}

export default Greeting;