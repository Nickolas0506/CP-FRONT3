import React from 'react';
import { News } from '../types';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.id}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const truncateContent = (content: string, maxLength: number = 50) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <article className="news-card" onClick={handleClick}>
      <div className="news-image">
        <img src={news.imagem} alt={news.titulo} />
      </div>
      <div className="news-content">
        <div className="news-meta">
          <span className="news-date">{formatDate(news.data)}</span>
          <div className="news-categories">
            {news.categorias.map((categoria, index) => (
              <span key={index} className="category-tag">
                {categoria}
              </span>
            ))}
          </div>
        </div>
        <h2 className="news-title">{news.titulo}</h2>
        <p className="news-excerpt">{truncateContent(news.conteudo)}</p>
        <div className="news-stats">
          <span className="comments-count">
            {news.comentarios.length} comentário{news.comentarios.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
