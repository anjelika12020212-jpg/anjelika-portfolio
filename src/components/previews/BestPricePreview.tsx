import React from 'react';
import { Search, Tag, Check, ArrowRight } from 'lucide-react';

interface BestPricePreviewProps {
  accentColor: string;
}

export const BestPricePreview: React.FC<BestPricePreviewProps> = ({ accentColor }) => {
  return (
    <div className="preview-container bestprice-preview" aria-label="Пример интерфейса сравнения цен">
      {/* Верхняя строка с бейджем */}
      <div className="preview-header">
        <span className="preview-mockup-title">Сравнение цен</span>
        <span className="preview-badge">Пример интерфейса</span>
      </div>

      {/* Полноразмерная строка поиска товара */}
      <div className="fake-search-bar">
        <Search size={14} className="search-icon" aria-hidden="true" />
        <span className="search-text">Наушники AirTune Pro (демо)</span>
      </div>

      {/* Инфо о товаре */}
      <div className="product-summary">
        <div className="product-info-left">
          <div className="product-title">Акустические наушники AirTune</div>
          <div className="product-subtitle">Сравнение 3 магазинов</div>
        </div>
        <div className="product-tag" style={{ color: accentColor, borderColor: `${accentColor}30` }}>
          <Tag size={13} aria-hidden="true" />
          <span>Экономия 1 200 ₽</span>
        </div>
      </div>

      {/* Список предложений магазинов */}
      <div className="price-offers-list">
        {/* Предложение 1 - Обычное */}
        <div className="price-offer-item">
          <div className="store-meta">
            <span className="store-name">Магазин Альфа</span>
            <span className="store-delivery">В наличии</span>
          </div>
          <div className="store-price">5 490 ₽</div>
        </div>

        {/* Предложение 2 - Самое выгодное (Выделено!) */}
        <div
          className="price-offer-item price-offer-best"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 16px ${accentColor}20`,
            backgroundColor: 'rgba(21, 25, 35, 0.95)',
          }}
        >
          <div className="best-tag" style={{ backgroundColor: accentColor, color: '#0B0D12' }}>
            <Check size={12} strokeWidth={3} aria-hidden="true" />
            <span>Лучшая цена</span>
          </div>
          <div className="store-meta">
            <span className="store-name font-highlight">Магазин Бета</span>
            <span className="store-delivery" style={{ color: accentColor }}>
              В наличии
            </span>
          </div>
          <div className="store-price font-best" style={{ color: accentColor }}>
            4 290 ₽
          </div>
        </div>

        {/* Предложение 3 - Обычное */}
        <div className="price-offer-item">
          <div className="store-meta">
            <span className="store-name">Магазин Гамма</span>
            <span className="store-delivery">В наличии</span>
          </div>
          <div className="store-price">4 890 ₽</div>
        </div>
      </div>

      {/* Нижняя строчка */}
      <div className="preview-footer-note">
        <span>Данные носят демонстрационный характер</span>
        <ArrowRight size={14} aria-hidden="true" />
      </div>
    </div>
  );
};
