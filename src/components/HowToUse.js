import "./HowToUse.css";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Button from "./Button";
import ModalWindow from "./ModalWindow";
import HowToUseModal1 from "./HowToUseModal1";
import HowToUseModal2 from "./HowToUseModal2";
import HowToUseModal3 from "./HowToUseModal3";
import HowToUseModal4 from "./HowToUseModal4";
import HowToUseModal5 from "./HowToUseModal5";

const howToUseModals = [
  <HowToUseModal1 />,
  <HowToUseModal2 />,
  <HowToUseModal3 />,
  <HowToUseModal4 />,
  <HowToUseModal5 />,
];

function HowToUse() {
  const [modalActive, setModalActive] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);
  const setCurrentModalHandler = (index) => {
    setCurrentModal(index);
    setModalActive(true);
  };

  return (
    <div className="howtouse-section">
      <div className="howtouse-container">
        <h2 className="howtouse-title">5 способов применения</h2>
        <div className="howtouse-cards">
          <div className="howtouse-cards-items">
            <div
              onClick={() => {
                windowWidth !== 375 && setCurrentModalHandler(0);
              }}
              className="howtouse-cards-item-body"
            >
              <div className="howtouse-cards-item">
                <img
                  alt="how to use"
                  src="/images/howtouse/img-1.png"
                  className="howtouse-cards-item-image"
                ></img>
                <h6 className="howtouse-cards-item-title">
                  Восстановление 100%
                </h6>
                <ul className="howtouse-cards-item-list">
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Активатор</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Шампунь</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />

                    <li className="howtouse-cards-item-item">Ботокс</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Маскарилла</li>
                  </div>
                </ul>
              </div>
              <button type="button" className="howtouse-cards-item-button">
                Подробнее
                <BsArrowRight className="howtouse-cards-item-button-icon" />
              </button>
            </div>
            <div
              onClick={() => {
                windowWidth !== 375 && setCurrentModalHandler(1);
              }}
              className="howtouse-cards-item-body"
            >
              <div className="howtouse-cards-item">
                <img
                  alt="how to use"
                  src="/images/howtouse/img-2.png"
                  className="howtouse-cards-item-image"
                ></img>
                <h6 className="howtouse-cards-item-title">До окрашивания</h6>
                <ul className="howtouse-cards-item-list">
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Активатор</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Шампунь</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />

                    <li className="howtouse-cards-item-item">Ботокс</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Краска</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Маскарилла</li>
                  </div>
                </ul>
              </div>
              <button type="button" className="howtouse-cards-item-button">
                Подробнее
                <BsArrowRight className="howtouse-cards-item-button-icon" />
              </button>
            </div>
            <div
              onClick={() => {
                windowWidth !== 375 && setCurrentModalHandler(2);
              }}
              className="howtouse-cards-item-body"
            >
              <div className="howtouse-cards-item">
                <img
                  alt="how to use"
                  src="/images/howtouse/img-3.png"
                  className="howtouse-cards-item-image"
                ></img>
                <h6 className="howtouse-cards-item-title">
                  Во время окрашивания
                </h6>
                <ul className="howtouse-cards-item-list">
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Ботокс</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Краска</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Маскарилла</li>
                  </div>
                </ul>
              </div>
              <button type="button" className="howtouse-cards-item-button">
                Подробнее
                <BsArrowRight className="howtouse-cards-item-button-icon" />
              </button>
            </div>
            <div
              onClick={() => {
                windowWidth !== 375 && setCurrentModalHandler(3);
              }}
              className="howtouse-cards-item-body"
            >
              <div className="howtouse-cards-item">
                <img
                  alt="how to use"
                  src="/images/howtouse/img-4.png"
                  className="howtouse-cards-item-image"
                ></img>
                <h6 className="howtouse-cards-item-title">После окрашивания</h6>
                <ul className="howtouse-cards-item-list">
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Краска</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />

                    <li className="howtouse-cards-item-item">Ботокс</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Маскарилла</li>
                  </div>
                </ul>
              </div>
              <button type="button" className="howtouse-cards-item-button">
                Подробнее
                <BsArrowRight className="howtouse-cards-item-button-icon" />
              </button>
            </div>
            <div
              onClick={() => {
                windowWidth !== 375 && setCurrentModalHandler(4);
              }}
              className="howtouse-cards-item-body"
            >
              <div className="howtouse-cards-item">
                <img
                  alt="how to use"
                  src="/images/howtouse/img-5.png"
                  className="howtouse-cards-item-image"
                ></img>
                <h6 className="howtouse-cards-item-title">Коктейль</h6>
                <ul className="howtouse-cards-item-list">
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Краска</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />

                    <li className="howtouse-cards-item-item">Ботокс</li>
                  </div>
                  <div className="howtouse-cards-item-row">
                    <RxDotFilled className="howtouse-cards-item-icon" />
                    <li className="howtouse-cards-item-item">Маскарилла</li>
                  </div>
                </ul>
              </div>
              <button type="button" className="howtouse-cards-item-button">
                Подробнее
                <BsArrowRight className="howtouse-cards-item-button-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="howtouse-social">
          <div className="howtouse-social-title-section">
            <h2 className="howtouse-social-title">
              Подпишитесь на наши социальные сети
            </h2>
            <p className="howtouse-social-text">
              Мы продолжим радовать вас полезным и интересным контентом,
              делиться новостями и другой важной информацией!
            </p>
          </div>
          <div className="howtouse-social-socialmedia-section">
            <div className="howtouse-social-socialmedia-images">
              <img
                alt="social media"
                src="/images/howtouse/img-social-1.png"
                className="howtouse-social-socialmedia-image social-socialmedia-image-1"
              ></img>
              <img
                alt="social media"
                src="/images/howtouse/img-social-2.png"
                className="howtouse-social-socialmedia-image social-socialmedia-image-2"
              ></img>
              <img
                alt="social media"
                src="/images/howtouse/img-social-3.png"
                className="howtouse-social-socialmedia-image social-socialmedia-image-3"
              ></img>
            </div>
            <div className="howtouse-social-socialmedia-buttons">
              <Button color="transparent">Instagram</Button>
              <Button color="transparent">Telegram</Button>
              <Button color="transparent">VK</Button>
            </div>
          </div>
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        {howToUseModals[currentModal]}
      </ModalWindow>
    </div>
  );
}

export default HowToUse;
