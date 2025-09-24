import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-page">
      <main className="main-content">
        <div className="container">
          <div className="not-found-content">
            <div className="error-code">404</div>
            <h1 className="error-title">Página não encontrada</h1>
            <p className="error-message">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
            <p className="error-suggestion">
              Que tal voltar para a página inicial e explorar nossas notícias?
            </p>
            <button onClick={handleGoHome} className="home-button">
              🏠 Voltar para Home
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
