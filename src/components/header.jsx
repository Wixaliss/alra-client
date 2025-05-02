import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`alra-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="alra-navigation">

        <ul className={`alra-nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="alra-nav-item">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/' ? 'alra-active' : ''}>
              Главная
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/about' ? 'alra-active' : ''}>
              О нас
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/services' ? 'alra-active' : ''}>
              Услуги
            </Link>
          </li>
          <li className="alra-nav-item">
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/contacts' ? 'alra-active' : ''}>
              Контакты
            </Link>
          </li>
          <li className="alra-nav-item alra-nav-book">
            <Link to="/book" onClick={() => setIsMenuOpen(false)}>
              Забронировать
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
