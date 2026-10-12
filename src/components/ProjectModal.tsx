import React, { useEffect, useRef } from 'react';
import { X, HelpCircle, Lightbulb, ListOrdered } from 'lucide-react';
import type { ProjectItem } from '../portfolioConfig';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  triggerElement,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Обработка блокировки скролла, фокуса и клавиатурных событий
  useEffect(() => {
    if (!isOpen || !project) return;

    // Сохраняем исходное состояние скролла
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Фокусируемся на кнопке закрытия при открытии
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);

      // Возврат фокуса на исходный элемент, вызвавший модальное окно
      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [isOpen, project, onClose, triggerElement]);

  if (!isOpen || !project) {
    return null;
  }

  // Клик по подложке (backdrop)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const hasValidLink = Boolean(project.link && project.link.trim().length > 0);

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-desc"
    >
      <div className="modal-dialog" ref={modalRef}>
        {/* Верхняя шапка модального окна */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span
              className="modal-category-badge"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}40`,
                backgroundColor: `${project.accentColor}15`,
              }}
            >
              {project.number} · {project.category}
            </span>
            {project.status && (
              <span className="modal-status-badge">
                {project.status}
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Заголовок проекта */}
        <div className="modal-title-group">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p id="modal-project-desc" className="modal-subtitle">
            {project.subtitle}
          </p>
          {hasValidLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-site-link"
            >
              Открыть сайт ↗
            </a>
          ) : null}
        </div>

        {/* Контент с тремя обязательными разделами */}
        <div className="modal-body-content">
          {/* 1. Какую задачу решает */}
          <section className="modal-section" aria-labelledby="modal-section-problem">
            <div className="section-label-row">
              <HelpCircle
                size={18}
                style={{ color: project.accentColor }}
                aria-hidden="true"
              />
              <h3 id="modal-section-problem" className="modal-section-title">
                Какую задачу решает
              </h3>
            </div>
            <p className="modal-section-text">{project.details.problem}</p>
          </section>

          {/* 2. Предлагаемое решение */}
          <section className="modal-section" aria-labelledby="modal-section-solution">
            <div className="section-label-row">
              <Lightbulb
                size={18}
                style={{ color: project.accentColor }}
                aria-hidden="true"
              />
              <h3 id="modal-section-solution" className="modal-section-title">
                {project.details.solutionTitle || 'Предлагаемое решение'}
              </h3>
            </div>
            <p className="modal-section-text">{project.details.solution}</p>
          </section>

          {/* 3. Как устроен основной сценарий пользователя / Как это работает */}
          <section className="modal-section" aria-labelledby="modal-section-scenario">
            <div className="section-label-row">
              <ListOrdered
                size={18}
                style={{ color: project.accentColor }}
                aria-hidden="true"
              />
              <h3 id="modal-section-scenario" className="modal-section-title">
                {project.details.scenarioTitle || 'Как устроен основной сценарий пользователя'}
              </h3>
            </div>
            {project.details.scenarioGroups ? (
              <div className="modal-scenario-groups">
                {project.details.scenarioGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="scenario-group-block">
                    <h4 className="scenario-group-title">{group.roleTitle}</h4>
                    <ol className="modal-scenario-list">
                      {group.steps.map((step, index) => (
                        <li key={index} className="scenario-step-item">
                          <span
                            className="scenario-step-num"
                            style={{
                              color: project.accentColor,
                              borderColor: `${project.accentColor}40`,
                            }}
                          >
                            0{index + 1}
                          </span>
                          <span className="scenario-step-text">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            ) : (
              <ol className="modal-scenario-list">
                {project.details.userScenario?.map((step, index) => (
                  <li key={index} className="scenario-step-item">
                    <span
                      className="scenario-step-num"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}40`,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span className="scenario-step-text">{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>

        {/* Подвал модального окна */}
        <div className="modal-footer">
          {hasValidLink ? null : (
            <span className="modal-note-no-link">
              Проект в разработке · Ссылка появится после публикации
            </span>
          )}

          <button
            type="button"
            className="modal-secondary-btn"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
