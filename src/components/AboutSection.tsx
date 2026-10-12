import React from 'react';
import { Bot, SearchCheck, Smartphone } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export const AboutSection: React.FC = () => {
  const { about } = portfolioConfig;

  const focusAreas = [
    {
      icon: <Bot size={22} />,
      accent: '#69C7FF',
      title: 'Помощники для сайтов',
      text: 'Диалоговые интерфейсы, которые помогают посетителям быстро находить нужную информацию и получать ответы прямо на сайте.',
    },
    {
      icon: <SearchCheck size={22} />,
      accent: '#C5F277',
      title: 'Сервисы сравнения цен',
      text: 'Веб-сервисы, которые помогают сравнивать предложения разных магазинов, находить лучшие цены и выбирать наиболее выгодный вариант.',
    },
    {
      icon: <Smartphone size={22} />,
      accent: '#FF91B8',
      title: 'Приложения для школ танцев',
      text: 'Удобные приложения для спортсменов и тренеров: расписание занятий, групповые и индивидуальные тренировки, информация о школе.',
    },
  ];

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="section-header-compact">
        <span className="section-label">Обо мне</span>
        <h2 id="about-heading" className="section-title">
          {about.title}
        </h2>
        {about.description.split('\n\n').map((paragraph) => (
          <p key={paragraph} className="about-main-text">
            {paragraph}
          </p>
        ))}
      </div>

      {/* 3 направления фокуса с соответствующими акцентами */}
      <div className="about-grid">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className="about-card"
            style={{
              '--card-accent': area.accent,
            } as React.CSSProperties}
          >
            <div
              className="about-card-icon"
              style={{
                color: area.accent,
                backgroundColor: `${area.accent}15`,
                borderColor: `${area.accent}30`,
              }}
              aria-hidden="true"
            >
              {area.icon}
            </div>
            <h3 className="about-card-title">{area.title}</h3>
            <p className="about-card-text">{area.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
