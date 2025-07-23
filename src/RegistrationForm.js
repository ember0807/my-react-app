import React, { useState } from 'react';
import './RegistrationForm.css'; //  файл для стилей формы

function RegistrationForm() {
  // Состояния для каждого поля формы
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Состояния для ошибок валидации
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Сброс предыдущих ошибок
    setPhoneError('');
    setEmailError('');

    let isValid = true;

    // Валидация телефона
    const phoneRegex = /^(\+7|8)?\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Пожалуйста, введите корректный номер телефона (например, +79XXXXXXXXX или 89XXXXXXXXX)');
      isValid = false;
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая валидация email
    if (!emailRegex.test(email)) {
      setEmailError('Пожалуйста, введите корректный email (например, user@example.com)');
      isValid = false;
    }

    if (isValid) {
      // Если все данные валидны, можно отправить их на сервер или выполнить другие действия
      console.log('Форма отправлена успешно!');
      console.log('ФИО:', fullName);
      console.log('Телефон:', phone);
      console.log('Email:', email);
      alert('Регистрация успешна!');
      // Очистить форму после отправки (опционально)
      setFullName('');
      setPhone('');
      setEmail('');
    } else {
      console.log('Ошибка валидации формы.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label htmlFor="fullName">ФИО:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel" // Тип tel для лучшей поддержки на мобильных устройствах
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {phoneError && <p className="error-message">{phoneError}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email" // Тип email для базовой валидации браузера
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;