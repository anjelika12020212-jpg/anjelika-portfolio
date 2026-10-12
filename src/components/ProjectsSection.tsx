import React from 'react';
import type { ProjectItem } from '../portfolioConfig';
import { portfolioConfig } from '../portfolioConfig';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onOpenDetails: (project: ProjectItem, triggerElement: HTMLElement) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDetails }) => {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="section-header">
        <span className="section-label">Портфолио</span>
        <h2 id="projects-heading" className="section-title">
          Мои проекты
        </h2>
        <p className="section-description">
          Бот-помощник для сайта, сервис поиска выгодных предложений и приложение для школы танцев — три готовых цифровых продукта.
        </p>
      </div>

      <div className="projects-grid">
        {portfolioConfig.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  );
};
