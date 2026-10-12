import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

const toTelHref = (phone: string): string | undefined => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) {
    return undefined;
  }

  const normalized = digits.startsWith('8') && digits.length === 11
    ? `7${digits.slice(1)}`
    : digits;

  return `tel:+${normalized}`;
};

export const ContactsSection: React.FC = () => {
  const { contacts } = portfolioConfig;
  const emailHref = contacts.email ? `mailto:${contacts.email}` : undefined;
  const phoneHref = toTelHref(contacts.phone);

  return (
    <section id="contacts" className="contacts-section" aria-labelledby="contacts-heading">
      <div className="contacts-card">
        <div className="contacts-header">
          <span className="section-label">Связь</span>
          <h2 id="contacts-heading" className="contacts-title">
            {contacts.title}
          </h2>
          <p className="contacts-subtitle">{contacts.description}</p>
        </div>

        <div className="contacts-list">
          <div className="contact-item">
            <Mail size={20} className="contact-icon" aria-hidden="true" />
            <div className="contact-item-body">
              <span className="contact-label">Написать на почту</span>
              {emailHref ? (
                <a href={emailHref} className="contact-value">
                  {contacts.email}
                </a>
              ) : null}
            </div>
          </div>

          <div className="contact-item">
            <Phone size={20} className="contact-icon" aria-hidden="true" />
            <div className="contact-item-body">
              <span className="contact-label">Позвонить</span>
              {phoneHref ? (
                <a href={phoneHref} className="contact-value">
                  {contacts.phone}
                </a>
              ) : (
                <span className="contact-value">{contacts.phone}</span>
              )}
            </div>
          </div>

          {contacts.telegram ? (
            <div className="contact-item">
              <Send size={20} className="contact-icon" aria-hidden="true" />
              <div className="contact-item-body">
                <span className="contact-label">Telegram</span>
                <a
                  href={
                    contacts.telegram.startsWith('http')
                      ? contacts.telegram
                      : `https://t.me/${contacts.telegram.replace(/^@/, '')}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  {contacts.telegram.startsWith('http')
                    ? contacts.telegram
                    : `@${contacts.telegram.replace(/^@/, '')}`}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
