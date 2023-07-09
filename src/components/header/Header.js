import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menuw.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden'; // Запретить прокрутку
    } else {
      body.style.overflow = 'auto'; // Разрешить прокрутку
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header_container">
        <div className="logo">
          <img src={logo} alt="IT-МАИ" />
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <img src={menuIcon} alt="Меню" />
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Главная</li>
            <li>Бакалавриат</li>
            <li>Магистратура</li>
            <li>Мероприятия</li>
            <li>Приемная комиссия</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;