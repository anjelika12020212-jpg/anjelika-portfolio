import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { hero } = portfolioConfig;

  return (
    <section className="hero-section" id="top" aria-label="Введение">
      <div className="hero-content">
        {/* Верхний бейдж */}
        <div className="hero-badge">
          <Sparkles size={14} className="badge-sparkle" aria-hidden="true" />
          <span>{hero.badge}</span>
        </div>

        {/* Главный заголовок */}
        <h1 className="hero-headline">
          <span className="headline-line">{hero.titleLine1}</span>
          <span className="headline-line headline-accent">{hero.titleLine2}</span>
        </h1>

        {/* Описание */}
        <p className="hero-description">{hero.description}</p>

        {/* Кнопки действий */}
        <div className="hero-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigate('projects')}
          >
            <span>{hero.primaryCta}</span>
            <ArrowDown size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('about')}
          >
            <span>{hero.secondaryCta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
