import "./Result.css";
import { useState, useEffect } from "react";
import { FaRegPlayCircle, FaCheckCircle } from "react-icons/fa";

function Result() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownHandler = () => {
    showDropDown ? setShowDropDown(false) : setShowDropDown(true);
  };
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  return (
    <div className="result-section">
      <div className="result-container">
        <h2 className="result-title">Результат</h2>
        <div className="result-body">
          <div className="result-side result-side-left">
            <ul
              style={
                windowWidth === 375
                  ? {
                      maxHeight: `${showDropDown ? "fit-content" : 135 + "px"}`,
                    }
                  : { maxHeight: "fit-content" }
              }
              className="result-list result-list-left"
            >
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Восстанавливает волосы по всей длине
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Позволяет отрастить длину
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Активно питает и увлажняет
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Продлевает цвет окрашенных волос
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Создает натуральный блеск
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Восстанавливает эластичность и прочность
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-left">
                  Увеличивает объем волос
                </li>
              </div>
            </ul>
          </div>
          <div className="result-center">
            <div className="result-image-container result-image-container-1">
              <img
                alt="result"
                src="/images/result/img-1.png"
                className="result-image"
              ></img>
              <FaRegPlayCircle className="result-image-play-icon"></FaRegPlayCircle>
            </div>
            <div className="result-image-container result-image-container-2">
              <img
                alt="result"
                src="/images/result/img-2.png"
                className="result-image"
              ></img>
              <FaRegPlayCircle className="result-image-play-icon"></FaRegPlayCircle>
            </div>
            <div className="result-image-container result-image-container-3">
              <img
                alt="result"
                src="/images/result/img-3.png"
                className="result-image"
              ></img>
              <FaRegPlayCircle className="result-image-play-icon"></FaRegPlayCircle>
            </div>
          </div>
          <div className="result-side result-side-right">
            <ul
              style={
                windowWidth === 375
                  ? {
                      maxHeight: `${showDropDown ? "fit-content" : 0 + "px"}`,
                    }
                  : { maxHeight: "fit-content" }
              }
              className="result-list result-list-right"
            >
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Обеспечивает термозащиту
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Сокращает время на укладку
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Облегчает расчесывание
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Предотвращает появление секущихся кончиков
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Защищает от негативного влияния окружающей среды
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Снимает статическое электричество
                </li>
              </div>
              <div className="result-item-row">
                <FaCheckCircle className="result-item-icon" />
                <li className="result-item result-item-right">
                  Снижает пушистость
                </li>
              </div>
            </ul>
          </div>
          {windowWidth === 375 && (
            <div
              onClick={dropDownHandler}
              className="show-more-dropdown-button"
            >
              {showDropDown ? "Скрыть" : "Показать еще"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
