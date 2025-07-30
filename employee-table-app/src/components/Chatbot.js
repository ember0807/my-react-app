import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import './Chatbot.css'; // Создадим этот файл для стилей

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null); // Для прокрутки вниз

  // Функция для прокрутки к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Прокручиваем при добавлении новых сообщений
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage('');

    // Имитация ответа бота через 1 секунду
    setTimeout(() => {
      const botResponse = {
        text: `Я получил ваше сообщение: "${userMessage.text}". В разработке...`,
        sender: 'bot'
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);


  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages-display">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef} /> {/* Пустой div для прокрутки */}
      </div>
      <div className="message-input-area">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Введите сообщение..."
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Chatbot;