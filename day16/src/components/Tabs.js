import React, { useState } from 'react';
import './Tabs.css';
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              style={{ cursor: 'pointer', fontWeight: index === activeTab ? 'bold' : 'normal' }}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;