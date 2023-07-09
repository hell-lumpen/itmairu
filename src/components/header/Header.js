import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';


function Header() {
    return (
        <header className="header">
            <div className='header_container'>
                <div className="logo">
                    <img src={logo} alt="Логотип" />
                </div>
                <nav className="nav">
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