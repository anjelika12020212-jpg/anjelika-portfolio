import React from 'react';
import { LayoutTemplate, AppWindow, Code2, Rocket } from 'lucide-react';

const capabilities = [
  {
    icon: <LayoutTemplate size={18} />,
    title: 'Проектирование',
    text: 'Продумываю структуру, сценарии и логику продукта.',
  },
  {
    icon: <AppWindow size={18} />,
    title: 'Интерфейсы',
    text: 'Создаю понятный и адаптивный пользовательский интерфейс.',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Разработка',
    text: 'Превращаю идею в работающий веб-сервис или приложение.',
  },
  {
    icon: <Rocket size={18} />,
    title: 'Запуск',
    text: 'Подготавливаю продукт к публикации и довожу до рабочего результата.',
  },
];

export const WhatIDoSection: React.FC = () => {
  return (
    <section id="what-i-do" className="what-i-do-section" aria-labelledby="what-i-do-heading">
      <div className="section-header-compact">
        <h2 id="what-i-do-heading" className="section-title">
          Что я делаю
        </h2>
      </div>

      <div className="what-i-do-grid">
        {capabilities.map((item) => (
          <article key={item.title} className="what-i-do-card">
            <div className="what-i-do-icon" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="what-i-do-card-title">{item.title}</h3>
            <p className="what-i-do-card-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
