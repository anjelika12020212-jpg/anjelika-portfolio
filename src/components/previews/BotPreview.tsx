import React from 'react';
import { Send, Bot, User } from 'lucide-react';

interface BotPreviewProps {
  accentColor: string;
}

export const BotPreview: React.FC<BotPreviewProps> = ({ accentColor }) => {
  return (
    <div className="preview-container bot-preview" aria-label="Пример интерфейса чат-бота">
      {/* Верхняя плашка */}
      <div className="preview-header">
        <div className="preview-agent-info">
          <div className="preview-avatar" style={{ backgroundColor: `${accentColor}25`, color: accentColor }}>
            <Bot size={16} aria-hidden="true" />
          </div>
          <div>
            <div className="preview-agent-name">Ассистент</div>
            <div className="preview-status">
              <span className="status-dot" style={{ backgroundColor: accentColor }}></span>
              Онлайн
            </div>
          </div>
        </div>
        <span className="preview-badge">Пример интерфейса</span>
      </div>

      {/* Тело чата */}
      <div className="preview-chat-body">
        {/* Сообщение пользователя */}
        <div className="chat-bubble chat-bubble-user">
          <div className="bubble-text">
            Где посмотреть стоимость услуг?
          </div>
          <div className="bubble-avatar" aria-hidden="true">
            <User size={14} />
          </div>
        </div>

        {/* Сообщение бота */}
        <div className="chat-bubble chat-bubble-bot">
          <div className="bubble-avatar" style={{ backgroundColor: `${accentColor}25`, color: accentColor }} aria-hidden="true">
            <Bot size={14} />
          </div>
          <div className="bubble-text">
            Стоимость указана в разделе “Услуги”. Какая услуга вас интересует?
          </div>
        </div>
      </div>

      {/* Поле ввода */}
      <div className="preview-input-bar">
        <div className="fake-input">Напишите сообщение...</div>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="fake-send-button"
          style={{ backgroundColor: accentColor }}
        >
          <Send size={15} color="#0B0D12" />
        </button>
      </div>
    </div>
  );
};
