import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} MonPortfolio. Tous droits réservés.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;