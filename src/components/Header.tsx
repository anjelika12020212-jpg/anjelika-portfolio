import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Логотип / Имя */}
        <a
          href="#top"
          className="header-brand"
          onClick={(e) => handleLinkClick(e, 'top')}
          aria-label={`${portfolioConfig.author.name} — наверх страницы`}
        >
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-name">{portfolioConfig.author.name}</span>
        </a>

        {/* Навигация для десктопа */}
        <nav className="header-nav-desktop" aria-label="Основная навигация">
          <ul className="nav-list">
            <li>
              <a
                href="#projects"
                className="nav-link"
                onClick={(e) => handleLinkClick(e, 'projects')}
              >
                {portfolioConfig.navigation.projects}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                {portfolioConfig.navigation.about}
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="nav-link"
                onClick={(e) => handleLinkClick(e, 'contacts')}
              >
                {portfolioConfig.navigation.contacts}
              </a>
            </li>
          </ul>
        </nav>

        {/* Кнопка открытия мобильного меню */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню навигации'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true" aria-label="Мобильное меню">
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              {portfolioConfig.navigation.projects}
            </a>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              {portfolioConfig.navigation.about}
            </a>
            <a
              href="#contacts"
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, 'contacts')}
            >
              {portfolioConfig.navigation.contacts}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
