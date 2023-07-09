import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menuw.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBachelorsOpen, setBachelorsOpen] = useState(false);
  const [isMastersOpen, setMastersOpen] = useState(false);

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

  const handleBachelorsClick = () => {
    setBachelorsOpen(!isBachelorsOpen);
  };

  const handleMastersClick = () => {
    setMastersOpen(!isMastersOpen);
  };

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
            <li onClick={handleBachelorsClick}>
              Бакалавриат
              {/* {isBachelorsOpen && (
                <ul className="sub-menu">
                  <li>Компьютерные науки и прикладная математика</li>
                  <li>Фундаментальная информатика и информационные технологии</li>
                </ul>
              )} */}
            </li>
            <li onClick={handleMastersClick}>
              Магистратура
              {/* {isMastersOpen && (
                <ul className="sub-menu">
                  <li>Прикладная математика</li>
                  <li>Прикладная математика и информатика</li>
                  <li>Фундаментальная информатика и информационные технологии</li>
                </ul>
              )} */}
            </li>
            <li>Мероприятия</li>
            <li>Приемная комиссия</li>
          </ul>
        </nav>
      </div>
    </header>
  );  
}

export default Header;