import React, { useState } from 'react';
import '../styles/tree-accordion.css';

// Рекурсивный компонент для одного узла дерева
const AccordionNode = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const hasContent = node.content;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-accordion-node" style={{ paddingLeft: `${level * 20}px` }}>
      <div className="node-title" onClick={hasChildren ? handleToggle : undefined}>
        {hasChildren && (
          <span className="node-toggle-icon">
            {isOpen ? '▼' : '▶'}
          </span>
        )}
        {node.title}
        {!hasChildren && hasContent && (
            <span className="node-file-icon">📄</span> // Иконка для файлов без детей
        )}
      </div>

      {isOpen && hasChildren && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <AccordionNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}

      {isOpen && !hasChildren && hasContent && ( // Показываем контент только для "листовых" узлов
        <div className="node-content">
          {node.content}
        </div>
      )}
    </div>
  );
};

// Главный компонент для всего дерева аккордеона
const TreeAccordion = ({ data }) => {
  return (
    <div className="tree-accordion-container">
      {data.map((node, index) => (
        <AccordionNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeAccordion;