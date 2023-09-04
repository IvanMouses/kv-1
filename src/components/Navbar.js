import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import ModalWindow from "./ModalWindow";
import FormModal from "./FormModal";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalTemplate, setModalTemplate] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const showMenuHandler = () => {
    !showMenu ? setShowMenu(true) : setShowMenu(false);
  };
  const clickOutsideHandler = () => {
    setShowMenu(false);
  };
  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) callback();
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref, callback]);
    return ref;
  };
  const ref = useOutsideClick(clickOutsideHandler);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const fixedNavbarHandler = () => {
    setFixedNavbar(true);
  };
  const removeFixedNavbarHandler = () => {
    setFixedNavbar(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 80) {
        fixedNavbarHandler();
      } else {
        removeFixedNavbarHandler();
      }
    });
  }, [fixedNavbar]);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  return (
    <div className="navbar-section">
      <nav className="navbar-container">
        <div
          className={
            fixedNavbar
              ? "navbar-above-section navbar-above-section-scroll-active"
              : "navbar-above-section"
          }
        >
          <div className="navbar-above-logo">
            <img
              src="/images/navbar/logo.png"
              alt="logo"
              className="navbar-above-logo-img"
            />
          </div>
          <div className="navbar-above-body">
            <a href="/" className="navbar-above-whatsapp">
              <FaWhatsapp
                className="navbar-above-whatsapp-icon"
                style={{ color: "#fff" }}
              />
              в Whatsapp
            </a>
            <p className="navbar-above-phone">+7(495) 2-5555-06</p>
            <Button type="button" onClick={setModalActive} color="dark">
              Получить прайс
            </Button>
          </div>
        </div>
        <div
          ref={ref}
          className={
            fixedNavbar
              ? "navbar-main-section navbar-main-section-scroll-active"
              : "navbar-main-section"
          }
        >
          <div className="navbar-main-body">
            <div onClick={showMenuHandler} className="navbar-main-icon-section">
              <span
                className={`navbar-main-icon-section-icon ${
                  showMenu ? "active-icon" : ""
                }`}
              ></span>
              <div
                className={`navbar-main-icon-text ${showMenu ? "active" : ""}`}
              >
                Меню
              </div>
              {showMenu && (
                <div className="navbar-main-icon-active">
                  <ul className="navbar-list-active">
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Ботокс для волос KV-1
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Обучение
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        О компании
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Дистрибьюторам
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Контакты
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Как сделать процедуру
                      </a>
                    </li>
                    <li className="navbar-item-active">
                      <a href="/" className="navbar-link-active">
                        Блог
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {windowWidth === 375 && (
              <div className="navbar-above-contacts-body">
                <a href="/" className="navbar-above-whatsapp mobile">
                  <FaWhatsapp
                    className="navbar-above-whatsapp-icon mobile"
                    style={{ color: "#fff" }}
                  />
                </a>
                <p className="navbar-above-phone mobile">+7(495) 2-5555-06</p>
              </div>
            )}
            <div className="navbar-main-list-section">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="/" className="navbar-link">
                    Холодный ботокс для волос KV-1
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/" className="navbar-link">
                    Обучение для парикмахеров
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/" className="navbar-link">
                    Стать технологом
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/" className="navbar-link">
                    Блог
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/" className="navbar-link">
                    Продукция для домашнего ухода
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <FormModal
          setActive={setModalActive}
          template={modalTemplate}
          setTemplate={setModalTemplate}
        />
      </ModalWindow>
    </div>
  );
}

export default Navbar;
