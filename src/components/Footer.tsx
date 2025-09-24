import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portal de Notícias</h3>
            <p>Mantendo você informado sobre as últimas notícias e tendências.</p>
          </div>
          
          <div className="footer-section">
            <h4>Desenvolvido por:</h4>
            <div className="team-info">
              <p><strong>Nome Completo 1</strong> - RA: 123456789</p>
              <p><strong>Nome Completo 2</strong> - RA: 987654321</p>
              <p><strong>Nome Completo 3</strong> - RA: 456789123</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Projeto</h4>
            <p>Portal de Notícias - FIAP</p>
            <p>Desenvolvido com React + TypeScript</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Portal de Notícias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
