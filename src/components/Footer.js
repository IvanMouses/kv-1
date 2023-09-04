import "./Footer.css";
import {
  FaInstagram,
  FaVk,
  FaFacebook,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-body">
          <div className="footer-logo-section">
            <img
              alt="logo"
              src="/images/footer/logo-white.png"
              className="footer-logo"
            ></img>
            <p className="footer-logo-text">
              Эксклюзивный дистрибьютор профессиональной косметики для волос
              KV-1 Anti-Aging beauty, Испания
            </p>
            <p className="footer-logo-text">
              Вся представленная на сайте информация, касающаяся стоимости,
              количетва, ассортимента, сроков проведия акций носит
              информационный характер и не является публичной офертой,
              определяемой положениями ст. 437 (2) ГК РФ. Опубликованная на
              сайте www.kv-1.com информация может быть изменена в любое время
              без предварительного уведомления. Для получения подробной
              информации обращайтесь по телефону 8 (495) 2-5555-06.
            </p>
          </div>
          <div className="footer-links-section">
            <div className="footer-links-menu">
              <h6 className="footer-links-menu-title">Меню</h6>
              <ul className="footer-links-menu-list">
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Главная
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Продукция
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Обучение
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    О компании
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Дистрибьюторам
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Контакты
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Где сделать процедуру
                  </a>
                </li>
                <li className="footer-links-menu-item">
                  <a href="/" className="footer-links-menu-link">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-product">
              <h6 className="footer-links-product-title">Продукция</h6>
              <ul className="footer-links-product-list">
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция Ботокс для волос KV-1
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция The Originals
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция Advanced Celular Repair
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция Fiber Prestige Moistur
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция The Aromatherapy
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция 365 Protection
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция GRK
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Коллекция Triсhology
                  </a>
                </li>
                <li className="footer-links-product-item">
                  <a href="/" className="footer-links-product-link">
                    Сопутствующие товары
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-contacts">
              <div className="footer-links-contacts-body">
                <h6 className="footer-links-contacts-title">Контакты</h6>
                <div className="footer-links-contacts-row">
                  <h6 className="footer-links-contacts-row-title">Адрес:</h6>
                  <p className="footer-links-contacts-row-text">
                    Россия, Москва, Гамсоновский переулок, дом 2, строение 2,
                    офис 207
                  </p>
                </div>
                <div className="footer-links-contacts-row">
                  <h6 className="footer-links-contacts-row-title">
                    График работы:
                  </h6>
                  <p className="footer-links-contacts-row-text">
                    Пн - Пт, 11:00 - 19:00
                  </p>
                </div>
                <div className="footer-links-contacts-row">
                  <h6 className="footer-links-contacts-row-title">Телефон:</h6>
                  <p className="footer-links-contacts-row-text">
                    +7 (495) 2-5555-06
                  </p>
                </div>
                <div className="footer-links-contacts-row">
                  <h6 className="footer-links-contacts-row-title">Whatsapp:</h6>
                  <p className="footer-links-contacts-row-text">
                    +7 (925) 282-77-61
                  </p>
                </div>
                <div className="footer-links-contacts-row">
                  <h6 className="footer-links-contacts-row-title">E-mail:</h6>
                  <p className="footer-links-contacts-row-text">
                    zakaz@kv-1.com
                  </p>
                </div>
              </div>
              <div className="footer-links-contacts-social">
                <h6 className="footer-links-contacts-social-title">
                  Мы в соцсетях
                </h6>
                <div className="footer-links-contacts-social-icons-container">
                  <FaInstagram className="footer-links-contacts-social-icon" />
                  <FaVk className="footer-links-contacts-social-icon" />
                  <FaFacebook className="footer-links-contacts-social-icon" />
                  <FaYoutube className="footer-links-contacts-social-icon" />
                  <FaTelegram className="footer-links-contacts-social-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-section">
          <p className="footer-copyright-text">
            Политика конфиденциальности и обработки данных
          </p>
          <p className="footer-copyright-text">
            Copyright © 2020-2023. Все права защищены. All rights Reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
