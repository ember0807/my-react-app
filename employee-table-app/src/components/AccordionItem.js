import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript'; // Подключаем нужные языки
import './AccordionItem.css';

function AccordionItem({ title, description, codeExample, isOpen, onToggle }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (isOpen && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isOpen, codeExample]); // Переподсвечиваем при открытии или смене кода

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onToggle}>
        {title}
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{description}</p>
          {codeExample && (
            <pre>
              <code ref={codeRef} className="language-javascript"> {/* Важно указать язык */}
                {codeExample.trim()} {/* trim() убирает лишние пробелы/переносы */}
              </code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;