import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import './NewsFeed.css';

const API_KEY = '9348c02b3cf246dd9c19732d494ed861'; //  КЛЮЧ ОТ NEWSAPI.ORG 
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null); // Сбрасываем ошибки при новом запросе
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            country: 'us', // регион новостей
            category: selectedCategory,
            apiKey: API_KEY
          }
        });
        setArticles(response.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError('Не удалось загрузить новости. Проверьте ваш API-ключ или попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]); // Зависимость: перезапускать эффект при смене категории

  return (
    <div className="news-feed-container">
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Делаем первую букву заглавной */}
          </button>
        ))}
      </div>

      {loading && <p className="loading-message">Загрузка новостей...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="news-grid">
        {!loading && !error && articles.length === 0 && (
          <p className="no-news-message">Новостей по данной категории не найдено.</p>
        )}
        {!loading && !error && articles.map((article, index) => (
          // NewsAPI может возвращать статьи без уникального ID, поэтому используем index как key
          <NewsCard key={article.url || index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;