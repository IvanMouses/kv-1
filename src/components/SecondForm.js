import "./SecondForm.css";
import Form from "./Form";
import { useState, useEffect } from "react";

function SecondForm() {
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
    <div className="secondform-section">
      <div className="secondform-container">
        <div className="secondform-image-section">
          <figure className="secondform-image-container">
            <img
              alt="some cute girl"
              src="/images/secondform/img-1.png"
              className="secondform-image"
            ></img>
            <figcaption className="secondform-image-text">
              Яна Горшкова
            </figcaption>
          </figure>
        </div>
        <div className="secondform-form-section">
          <h2 className="secondform-title">
            Поможем с выбором продукции <br /> для вашего салона красоты
          </h2>
          <h6 className="secondform-subtitle">
            Оставьте заявку и наши менеджеры свяжутся с вами!
          </h6>
          {windowWidth === 375 ? <Form /> : <Form wideForm />}
          <p className="secondform-text">
            Заполняя и отправляя форму, вы соглашаетесь с{" "}
            <a href="/" className="secondform-link">
              политикой обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondForm;
