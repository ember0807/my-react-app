import React from 'react';
import './NewsCard.css';

function NewsCard({ article }) {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="news-card">
      {urlToImage && <img src={urlToImage} alt={title} className="news-image" />}
      <div className="news-content">
        <h3 className="news-title">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <p className="news-description">{description}</p>
        <div className="news-meta">
          <span>Источник: {source.name}</span>
          <span>Дата: {formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;