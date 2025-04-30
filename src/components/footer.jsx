import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to add the email to your newsletter list
      setSubscribeStatus('success');
      setTimeout(() => {
        setSubscribeStatus('');
        setEmail('');
      }, 3000);
    } else {
      setSubscribeStatus('error');
    }
  };

  return (
    <footer className="alra-footer">
      <div className="alra-footer-container">
        <div className="alra-footer-top">
          <div className="alra-footer-brand">
            <div className="alra-footer-logo">
              <span className="alra-footer-logo-icon">&#127794;</span>
              <h3 className="alra-footer-logo-text">ALRA <span>Eco Village</span></h3>
            </div>
            <p className="alra-footer-tagline">
              Уникальный эко-отель в живописной Абхазии, 
              где комфорт и природа сочетаются в гармонии.
            </p>
            <div className="alra-footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="alra-social-link">
                <span className="alra-social-icon">f</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="alra-social-link">
                <span className="alra-social-icon">📸</span>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="alra-social-link">
                <span className="alra-social-icon">✈️</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="alra-social-link">
                <span className="alra-social-icon">📱</span>
              </a>
            </div>
          </div>

          <div className="alra-footer-links">
            <div className="alra-footer-column">
              <h4 className="alra-footer-heading">Навигация</h4>
              <ul className="alra-footer-menu">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/rooms">Номера</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/gallery">Галерея</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>

            <div className="alra-footer-column">
              <h4 className="alra-footer-heading">Услуги</h4>
              <ul className="alra-footer-menu">
                <li><Link to="/services/restaurant">Эко-ресторан</Link></li>
                <li><Link to="/services/sauna">Сауна и баня</Link></li>
                <li><Link to="/services/yoga">Йога на природе</Link></li>
                <li><Link to="/services/hiking">Треккинг</Link></li>
                <li><Link to="/services/tours">Экскурсии</Link></li>
                <li><Link to="/services/spa">Массаж и спа</Link></li>
              </ul>
            </div>

            <div className="alra-footer-column">
              <h4 className="alra-footer-heading">Контакты</h4>
              <address className="alra-footer-contact">
                <p>
                  <span className="alra-contact-label">Адрес:</span>
                  <span className="alra-contact-info">Республика Абхазия, Кындыг, ул. Школьная</span>
                </p>
                <p>
                  <span className="alra-contact-label">Телефон:</span>
                  <a href="tel:+79401234567" className="alra-contact-info">+7 (940) 123-45-67</a>
                </p>
                <p>
                  <span className="alra-contact-label">Email:</span>
                  <a href="mailto:info@alra-eco.com" className="alra-contact-info">info@alra-eco.com</a>
                </p>
                <p>
                  <span className="alra-contact-label">Часы работы:</span>
                  <span className="alra-contact-info">Ежедневно, 24/7</span>
                </p>
              </address>
            </div>
          </div>

          <div className="alra-footer-newsletter">
            <h4 className="alra-footer-heading">Подпишитесь на новости</h4>
            <p className="alra-newsletter-desc">
              Получайте специальные предложения и новости о событиях в ALRA Eco Village
            </p>
            <form className="alra-newsletter-form" onSubmit={handleSubscribe}>
              <div className="alra-form-group">
                <input
                  type="email"
                  className="alra-newsletter-input"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="alra-newsletter-button">
                  Подписаться
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="alra-newsletter-success">Спасибо за подписку!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="alra-newsletter-error">Пожалуйста, введите email</p>
              )}
            </form>
          </div>
        </div>

        <div className="alra-footer-bottom">
          <div className="alra-footer-copyright">
            <p>&copy; {new Date().getFullYear()} ALRA Eco Village. Все права защищены.</p>
          </div>
          <div className="alra-footer-legal">
            <Link to="/privacy" className="alra-legal-link">Политика конфиденциальности</Link>
            <Link to="/terms" className="alra-legal-link">Условия использования</Link>
          </div>
          <div className="alra-footer-payment">
            <span className="alra-payment-icon">💳</span>
            <span className="alra-payment-icon">🏦</span>
            <span className="alra-payment-icon">💵</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 