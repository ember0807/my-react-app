import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import ImageGallery from './components/ImageGallery';
import NewsFeed from './components/NewsFeed';
import Chatbot from './components/Chatbot';
import Accordion from './components/Accordion';
import codeDocumentationItems from './data/codeExamples';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Таблица сотрудников</h1>
      <EmployeeTable />

      <hr style={{ margin: '40px 0' }} />

      <h1>Галерея изображений</h1>
      <ImageGallery />

      <hr style={{ margin: '40px 0' }} />

      <h1>Новостная лента</h1>
      <NewsFeed />

      <hr style={{ margin: '40px 0' }} />

      <h1>Чат с ботом</h1>
      <Chatbot />

      <hr style={{ margin: '40px 0' }} />

      <h1>Документация с примерами кода</h1>
      <Accordion items={codeDocumentationItems} /> 
    </div>
  );
}

export default App;