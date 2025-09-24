import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="team-info">
            <h4>Desenvolvido por:</h4>
            <p><strong>Nome Completo 1</strong> - RM: 123456789</p>
            <p><strong>Nome Completo 2</strong> - RM: 987654321</p>
            <p><strong>Nome Completo 3</strong> - RM: 456789123</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
