import { useState } from 'react';
import type { ProjectItem } from './portfolioConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { AboutSection } from './components/AboutSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import './App.css';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const handleOpenDetails = (project: ProjectItem, trigger: HTMLElement) => {
    setSelectedProject(project);
    setTriggerElement(trigger);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      // Плавная прокрутка с учётом плавающей шапки
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Пропуск к контенту для пользователей скринридеров */}
      <a href="#projects" className="skip-to-content">
        Перейти к основному содержимому
      </a>

      {/* Шапка сайта */}
      <Header onNavigate={scrollToSection} />

      {/* Основной контент */}
      <main id="main-content" className="site-main">
        {/* Первый экран (Hero) */}
        <Hero onNavigate={scrollToSection} />

        {/* Раздел «Обо мне» */}
        <AboutSection />

        {/* Раздел проектов */}
        <ProjectsSection onOpenDetails={handleOpenDetails} />

        {/* Раздел «Что я делаю» */}
        <WhatIDoSection />

        {/* Раздел «Контакты» */}
        <ContactsSection />
      </main>

      {/* Подвал сайта */}
      <Footer />

      {/* Доступное модальное окно деталей проекта */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
        triggerElement={triggerElement}
      />
    </div>
  );
}

export default App;
