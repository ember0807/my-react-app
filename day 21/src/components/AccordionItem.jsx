import React from 'react';
import '../styles/accordion.css';

const AccordionItem = ({ title, content, isOpen, onToggle, showIcon = true, iconOpen = '-', iconClosed = '+', disableContentTransition = false }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        {title}
        {showIcon && (
          <span className="accordion-icon">
            {isOpen ? iconOpen : iconClosed}
          </span>
        )}
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        // логика для transition ***
        style={{
          maxHeight: isOpen ? '200px' : '0',
          // Если disableContentTransition истинно, то transition = 'none', иначе - обычный transition
          transition: disableContentTransition
                      ? 'none'
                      : 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
        }}
      >
        <div className="accordion-content-inner">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;