import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="alra-header">
      <nav className="alra-navigation">
        <ul className="alra-nav-list">
          <li className="alra-nav-item">
            <Link to="/" className={location.pathname === '/' ? 'alra-active' : ''}>
              Главная
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'alra-active' : ''}>
              О нас
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/services" className={location.pathname === '/services' ? 'alra-active' : ''}>
              Услуги
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/contacts" className={location.pathname === '/contacts' ? 'alra-active' : ''}>
              Контакты
            </Link>
          </li>
          <li className="alra-nav-item alra-nav-book">
            <Link to="/book">
              Забронировать
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 