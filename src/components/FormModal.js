import { useState } from "react";
import "./FormModal.css";
import Button from "./Button";

function FormModal({ setActive, template, setTemplate }) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [validInputName, setValidInputName] = useState(false);
  const [validInputEmail, setValidInputEmail] = useState(false);
  const [invalidInputNameClass, setInvalidInputNameClass] = useState(false);
  const [invalidInputEmailClass, setInvalidInputEmailClass] = useState(false);
  const closeModalHandler = () => {
    setActive(false);
  };
  const validInputNameHandler = () => {
    inputName ? setValidInputName(true) : setValidInputName(false);
    inputName
      ? setInvalidInputNameClass(false)
      : setInvalidInputNameClass(true);
  };
  const validInputEmailHandler = () => {
    inputEmail ? setValidInputEmail(true) : setValidInputEmail(false);
    inputEmail
      ? setInvalidInputEmailClass(false)
      : setInvalidInputEmailClass(true);
  };
  const formValidation = (e) => {
    e.preventDefault();
    if (validInputName && validInputEmail) {
      setTemplate(2);
      setTimeout(() => {
        setInputName("");
        setInputEmail("");
        closeModalHandler();
        setTimeout(() => {
          setTemplate(1);
        }, 300);
      }, 3000);
    } else {
      setInvalidInputNameClass(true);
      setInvalidInputEmailClass(true);
    }
  };

  return (
    <>
      {template === 1 ? (
        <div className="navbar-modal-container">
          <div className="navbar-modal-title-section">
            <h2 className="navbar-modal-title">
              Нужна консультация или помощь в заказе?
            </h2>
            <h2 className="navbar-modal-title">
              Оставьте ваши контактные данные и наши менеджеры свяжутся с вами!
            </h2>
          </div>
          <form method="get" action="#" className="navbar-modal-form">
            <div
              className={
                validInputName
                  ? "navbar-modal-input-row"
                  : `navbar-modal-input-row invalid-input ${
                      invalidInputNameClass && "active"
                    }`
              }
            >
              <input
                required
                type="text"
                value={inputName}
                placeholder="Ваше имя"
                className="navbar-modal-input input-name"
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                onBlur={validInputNameHandler}
              ></input>
            </div>
            <div
              className={
                validInputEmail
                  ? "navbar-modal-input-row"
                  : `navbar-modal-input-row invalid-input ${
                      invalidInputEmailClass && "active"
                    }`
              }
            >
              <input
                required
                type="email"
                value={inputEmail}
                placeholder="Ваша электронная почта"
                className="navbar-modal-input input-email"
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                onBlur={validInputEmailHandler}
              ></input>
            </div>
            <div className="navbar-modal-button-container">
              <p className="navbar-modal-text">
                Заполняя и отправляя форму, вы соглашаетесь с{" "}
                <a href="/" target="blank" className="navbar-modal-link">
                  политикой обработки персональных данных
                </a>
              </p>
              <Button onClick={formValidation} type="submit" color="light">
                Отправить
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="navbar-modal-container">
          <div className="navbar-modal-title-section">
            <h2 className="navbar-modal-title">Благодарим за обращение!</h2>
            <h2 className="navbar-modal-title">
              В ближайшее время на указанную электронную почту будет отправлен
              прайс лист
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
