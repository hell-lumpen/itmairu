import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer_container'>
        <div className="sitemap">
          <h3>Карта сайта</h3>
          <ul>
            <li>Главная</li>
            <li>Бакалавриат</li>
            <li>Магистратура</li>
            <li>Мероприятия</li>
            <li>Приемная комиссия</li>
          </ul>
        </div>
        <div className="social">
          <h3>Мы в социальных сетях</h3>
          <ul>
            <li><a href="https://vk.com">Вконтакте</a></li>
            <li><a href="https://telegram.org">Телеграм</a></li>
            <li><a href="https://www.youtube.com">YouTube</a></li>
          </ul>
        </div>
        <div className='contacts'>
            <h3>Связь с нами</h3>
            <p>
                Адрес:<br/>
                <a href={'https://yandex.ru/maps/-/CCUDB-tEpD'} target="_blank" rel="noopener noreferrer">Москва, Волоколамское шоссе 4, корпус 6, 3 этаж, комната 8 (Приемная комиссия)</a>
            </p>
            <p>
            <a href={'https://yandex.ru/maps/-/CCUDB-tEpD'} target="_blank" rel="noopener noreferrer">Москва, Волоколамское шоссе 4, корпус 6, 6 этаж, комната 607 (Дирекция Института №8)</a>
            </p>
            <p>Номер телефона:<br/> 
                <a href={'tel:+74952151789'} target="_blank" rel="noopener noreferrer">+7&nbsp;(495)&nbsp;215&nbsp;17&nbsp;89 (Приемная комиссия)</a></p>
            <p><a href={'tel:+74952151789'} target="_blank" rel="noopener noreferrer">+7&nbsp;(495)&nbsp;215&nbsp;17&nbsp;89 (Дирекция Института №8)</a></p>

        </div>
        <div className="legal-info">
          <p>© 2023 ИТ-центр МАИ (Московский авиационный институт). Все права защищены</p>
          <p>Сайт использует файлы cookie. Продолжая работу с itmai.ru, вы подтверждаете использование сайтом cookies вашего браузера, которые помогают нам делать этот сайт удобнее для пользователей. Однако вы можете запретить сохранение файлов cookie в настройках своего браузера.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;