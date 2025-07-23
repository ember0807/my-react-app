import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0); // Время в миллисекундах
  const [isRunning, setIsRunning] = useState(false); // Состояние: запущен ли таймер
  const intervalRef = useRef(null); // Ref для хранения ID интервала, чтобы его можно было очистить

  // useEffect для управления интервалом
  useEffect(() => {
    if (isRunning) {
      // Запускаем интервал, если таймер запущен
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Обновляем время каждые 10 мс
      }, 10);
    } else {
      // Очищаем интервал, если таймер остановлен
      clearInterval(intervalRef.current);
    }

    // Функция очистки: вызывается при размонтировании компонента или перед следующим эффектом
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // Зависимость: эффект срабатывает при изменении isRunning

  // Функции для кнопок
  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Форматирование времени для отображения
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10); // Сотни миллисекунд

    return (
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0') + ':' +
      String(centiseconds).padStart(2, '0')
    );
  };

  return (
    <div className="stopwatch">
      <h2>Секундомер</h2>
      <div className="stopwatch-display">
        {formatTime(time)}
      </div>
      <div className="stopwatch-controls">
        <button onClick={startStopwatch} disabled={isRunning}>Старт</button>
        <button onClick={stopStopwatch} disabled={!isRunning}>Стоп</button>
        <button onClick={resetStopwatch}>Сброс</button>
      </div>
    </div>
  );
}

export default Stopwatch;