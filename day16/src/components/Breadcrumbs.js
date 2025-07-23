import React from 'react';
import './Breadcrumbs.css';
const Breadcrumbs = ({ path }) => {
  return (
    <div>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          {index < path.length - 1 ? (
            <a href={item.url}>{item.label}</a>
          ) : (
            <span>{item.label}</span> // Последний элемент неактивный
          )}
          {index < path.length - 1 && <span> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;