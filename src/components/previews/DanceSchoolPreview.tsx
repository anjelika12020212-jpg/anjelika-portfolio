import React from 'react';

interface DanceSchoolPreviewProps {
  accentColor: string;
}

export const DanceSchoolPreview: React.FC<DanceSchoolPreviewProps> = ({ accentColor }) => {
  return (
    <div className="preview-container dance-preview" aria-label="Пример интерфейса расписания танцев">
      {/* Шапка мобильного виджета */}
      <div className="preview-header">
        <span className="preview-mockup-title">Расписание</span>
        <span className="preview-badge">Пример интерфейса</span>
      </div>

      {/* Переключатель дней */}
      <div className="dance-tabs">
        <span
          className="dance-tab active"
          style={{
            backgroundColor: `${accentColor}20`,
            color: accentColor,
            borderColor: `${accentColor}40`,
          }}
        >
          Сегодня
        </span>
        <span className="dance-tab">Завтра</span>
      </div>

      {/* Список занятий */}
      <div className="dance-classes-list">
        {/* Занятие 1: Групповое */}
        <div className="dance-class-card">
          <div className="class-main">
            <span className="class-name">17:00–18:00</span>
            <div className="class-title-row">
              <span style={{ color: '#D6A53B', fontWeight: 600, fontSize: '13px' }}>Групповое</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>·</span>
              <span
                style={{
                  color: '#A66BFF',
                  backgroundColor: 'rgba(166, 107, 255, 0.14)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '12px',
                }}
              >
                СТ
              </span>
            </div>
            <span style={{ color: '#D878E8', fontSize: '13px', fontWeight: 500 }}>Стандарт</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>Иванова А.М.</span>
          </div>
        </div>

        {/* Занятие 2: Своё индивидуальное занятие */}
        <div className="dance-class-card">
          <div className="class-main">
            <span className="class-name">18:30–19:15</span>
            <div className="class-title-row">
              <span style={{ color: '#D6A53B', fontWeight: 600, fontSize: '13px' }}>Индивидуальное</span>
            </div>
            <span style={{ color: 'var(--color-text-main)', fontSize: '13px', fontWeight: 500 }}>Петрова Анна</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>Иванова А.М.</span>
          </div>
        </div>

        {/* Блок 3: Свободное время */}
        <div className="dance-class-card free-slot">
          <div className="class-main">
            <span className="class-name">19:30–20:15</span>
            <div className="class-title-row">
              <span style={{ color: '#36B8C9', fontWeight: 600, fontSize: '13px' }}>Свободное время</span>
            </div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>Доступно для согласования</span>
          </div>
        </div>
      </div>
    </div>
  );
};
