import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { News } from '../types';
import { newsService } from '../services/newsService';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import './NewsDetailPage.css';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [commentsLoaded, setCommentsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const newsId = parseInt(id);
      const foundNews = newsService.getNewsById(newsId);
      
      if (foundNews) {
        setNews(foundNews);
        setLoading(false);
        
        // Simular carregamento dos comentários após o carregamento inicial
        setTimeout(() => {
          setCommentsLoaded(true);
        }, 1000);
      } else {
        setLoading(false);
      }
    }
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando notícia...</p>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>Notícia não encontrada</h1>
          <p>A notícia que você está procurando não existe ou foi removida.</p>
          <button onClick={handleBackClick} className="back-button">
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <header className="page-header">
        <div className="container">
          <button onClick={handleBackClick} className="back-button">
            ← Voltar para Home
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <article className="news-article">
            <div className="article-header">
              <div className="article-meta">
                <span className="article-date">{formatDate(news.data)}</span>
                <div className="article-categories">
                  {news.categorias.map((categoria, index) => (
                    <span key={index} className="category-tag">
                      {categoria}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="article-title">{news.titulo}</h1>
            </div>

            <div className="article-image">
              <img src={news.imagem} alt={news.titulo} />
            </div>

            <div className="article-content">
              <p>{news.conteudo}</p>
            </div>
          </article>

          {commentsLoaded && <Comments comments={news.comentarios} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
