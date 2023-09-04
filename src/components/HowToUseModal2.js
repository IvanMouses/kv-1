import "./HowToUseModal2.css";
import { RxDotFilled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

function HowToUseModal2() {
  return (
    <div className="how-to-use-modal-container">
      <h2 className="how-to-use-modal-title">До окрашивания</h2>
      <div className="how-to-use-modal-body">
        <div className="how-to-use-modal-leftside">
          <div className="how-to-use-modal-image-container">
            <img
              alt="procedure components"
              src="/images/howtouse/img-2.png"
              className="how-to-use-modal-image"
            ></img>
            <ul className="how-to-use-modal-item-list">
              <div className="how-to-use-modal-item-row">
                <RxDotFilled className="how-to-use-modal-item-icon" />
                <li className="how-to-use-modal-item-item">Активатор</li>
              </div>
              <div className="how-to-use-modal-item-row">
                <RxDotFilled className="how-to-use-modal-item-icon" />
                <li className="how-to-use-modal-item-item">Шампунь</li>
              </div>
              <div className="how-to-use-modal-item-row">
                <RxDotFilled className="how-to-use-modal-item-icon" />

                <li className="how-to-use-modal-item-item">Ботокс</li>
              </div>
              <div className="how-to-use-modal-item-row">
                <RxDotFilled className="how-to-use-modal-item-icon" />
                <li className="how-to-use-modal-item-item">Краска</li>
              </div>
              <div className="how-to-use-modal-item-row">
                <RxDotFilled className="how-to-use-modal-item-icon" />
                <li className="how-to-use-modal-item-item">Маскарилла</li>
              </div>
            </ul>
          </div>
          <div className="how-to-use-modal-stages-container">
            <h2 className="how-to-use-modal-stages-title">Этапы процедуры:</h2>
            <ul className="how-to-use-modal-stages-list">
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">1</div>
                <li className="how-to-use-modal-items">Нанести активатор</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">2</div>
                <li className="how-to-use-modal-items">Нагреть ботокс</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">3</div>
                <li className="how-to-use-modal-items">Вымыть волосы</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">4</div>
                <li className="how-to-use-modal-items">Приготовить состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">5</div>
                <li className="how-to-use-modal-items">Нанести состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">6</div>
                <li className="how-to-use-modal-items">Эффект паровой бани</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">7</div>
                <li className="how-to-use-modal-items">Остудить волосы</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">8</div>
                <li className="how-to-use-modal-items">Смыть состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">9</div>
                <li className="how-to-use-modal-items">
                  Высушить волосы (если необходимо)
                </li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">10</div>
                <li className="how-to-use-modal-items">
                  Приступить к окрашиванию или тонированию
                </li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">11</div>
                <li className="how-to-use-modal-items">Нанести маскариллу</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">12</div>
                <li className="how-to-use-modal-items">
                  Высушить волосы и сделать укладку
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="how-to-use-modal-rightside">
          <div className="how-to-use-modal-list-container">
            <h2 className="how-to-use-modal-list-title">Задача:</h2>
            <ul className="how-to-use-modal-list-list">
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Сохранение структуры волоса
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Улучшение качества окрашенных волос
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Закрашивание седины
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Решение проблем{" "}
                  <span className="how-to-use-modal-list-item-span">
                    пористости{" "}
                  </span>
                  и{" "}
                  <span className="how-to-use-modal-list-item-span">
                    быстрого вымывания{" "}
                  </span>
                  искусственного пигмента
                </li>
              </div>
            </ul>
          </div>
          <div className="how-to-use-modal-list-container">
            <h2 className="how-to-use-modal-list-title">Результат:</h2>
            <ul className="how-to-use-modal-list-list">
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Краситель идеально растягивается и равномерно ложится
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Расход краски снижается до 30%
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Краситель держится гораздо дольше, уменьшается вымывание цвета
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Цвет максимально насыщенный
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Защита кожи головы от пересушивания
                </li>
              </div>
            </ul>
          </div>
          <div className="how-to-use-modal-message-section">
            <div className="how-to-use-modal-message-body">
              <div className="how-to-use-modal-message-icon">!</div>
              <p className="how-to-use-modal-message-text">
                Уход проводится перед любым окрашиванием с оксидом до 12%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseModal2;
