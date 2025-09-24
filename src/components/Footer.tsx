import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="team-info">
            <h4>Desenvolvido por:</h4>
            <p><strong>Rafael Malaguti</strong> - RM: 561830</p>
            <p><strong>Nickolas Davi</strong> - RM: 564105</p>
            <p><strong>Samara Vilela</strong> - RM: 566133</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
