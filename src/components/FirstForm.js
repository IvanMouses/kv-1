import "./FirstForm.css";
import { useState, useEffect } from "react";
import Form from "./Form";

function FirstForm() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  return (
    <div className="form-section">
      <div className="form-container">
        {windowWidth === 375 ? (
          <>
            <h2 className="form-title">
              Оставьте ваши контактные данные и наши менеджеры свяжутся с вами!
            </h2>
          </>
        ) : (
          <>
            <h2 className="form-title">
              Нужна консультация или помощь в заказе?
            </h2>
            <h2 className="form-title">
              Оставьте ваши контактные данные и наши менеджеры свяжутся с вами!
            </h2>
          </>
        )}

        <Form />
        <p className="form-text">
          Заполняя и отправляя форму, вы соглашаетесь с{" "}
          <a href="/" className="form-link">
            политикой обработки персональных данных
          </a>
        </p>
      </div>
    </div>
  );
}

export default FirstForm;
