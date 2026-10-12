import React from 'react';
import { portfolioConfig } from '../portfolioConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-text">
          <span className="footer-name">{portfolioConfig.author.name}</span>
          <span className="footer-separator">·</span>
          <span>{portfolioConfig.author.role}</span>
          <span className="footer-separator">·</span>
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
};
