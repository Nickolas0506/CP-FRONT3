import React, { useState, useEffect } from 'react';
import { News } from '../types';
import { newsService } from '../services/newsService';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      const allNews = newsService.getAllNews();
      setNews(allNews);
      setFilteredNews(allNews);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredNews(news);
    } else {
      const filtered = newsService.searchNews(searchQuery);
      setFilteredNews(filtered);
    }
  }, [searchQuery, news]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Portal de Notícias</h1>
          <p className="page-subtitle">Fique por dentro das últimas notícias</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar notícias por título, conteúdo ou categoria..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              <div className="search-icon">🔍</div>
            </div>
          </div>

          <div className="news-section">
            <div className="section-header">
              <h2 className="section-title">
                {searchQuery ? `Resultados para "${searchQuery}"` : 'Todas as Notícias'}
              </h2>
              <span className="news-count">
                {filteredNews.length} notícia{filteredNews.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredNews.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">📰</div>
                <h3>Nenhum artigo encontrado</h3>
                <p>
                  {searchQuery 
                    ? `Não encontramos nenhuma notícia que corresponda à sua busca por "${searchQuery}".`
                    : 'Não há notícias disponíveis no momento.'
                  }
                </p>
                {searchQuery && (
                  <button 
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                  >
                    Limpar busca
                  </button>
                )}
              </div>
            ) : (
              <div className="news-grid">
                {filteredNews.map((newsItem) => (
                  <NewsCard key={newsItem.id} news={newsItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
