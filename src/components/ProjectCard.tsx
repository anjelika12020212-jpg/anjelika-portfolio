import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../portfolioConfig';
import { BotPreview } from './previews/BotPreview';
import { BestPricePreview } from './previews/BestPricePreview';
import { DanceSchoolPreview } from './previews/DanceSchoolPreview';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem, triggerElement: HTMLElement) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    if (buttonRef.current) {
      onOpenDetails(project, buttonRef.current);
    }
  };

  const renderPreview = () => {
    switch (project.id) {
      case 'bot-assistant':
        return <BotPreview accentColor={project.accentColor} />;
      case 'bestprice':
        return <BestPricePreview accentColor={project.accentColor} />;
      case 'dance-school':
        return <DanceSchoolPreview accentColor={project.accentColor} />;
      default:
        return null;
    }
  };

  return (
    <article
      className="project-card"
      style={
        {
          '--project-accent': project.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Верхняя часть карточки: номер, категория, заголовок, подзаголовок, описание */}
      <div className="card-top-content">
        <div className="card-meta-row">
          <span className="card-number-tag">{project.number}</span>
          <span className="card-category-tag">{project.category}</span>
        </div>

        <div className="card-status">
          <span className="card-status-dot" aria-hidden="true" />
          <span>Проект запущен</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <div className="card-subtitle">{project.subtitle}</div>
        <p className="card-description">{project.description}</p>
      </div>

      {/* Интерактивный/визуальный пример интерфейса (HTML/CSS) */}
      <div className="card-preview-wrapper">{renderPreview()}</div>

      {/* Нижняя часть карточки с кнопкой «Подробнее» */}
      <div className="card-bottom-bar">
        <button
          ref={buttonRef}
          type="button"
          className="card-details-btn"
          onClick={handleOpen}
          aria-label={`Подробнее о проекте: ${project.title}`}
        >
          <span>Подробнее</span>
          <ArrowUpRight size={18} className="btn-arrow" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
