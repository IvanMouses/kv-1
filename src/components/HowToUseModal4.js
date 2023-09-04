import "./HowToUseModal4.css";
import { RxDotFilled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

function HowToUseModal4() {
  return (
    <div className="how-to-use-modal-container">
      <h2 className="how-to-use-modal-title">После окрашивания</h2>
      <div className="how-to-use-modal-body">
        <div className="how-to-use-modal-leftside">
          <div className="how-to-use-modal-image-container">
            <img
              alt="procedure components"
              src="/images/howtouse/img-4.png"
              className="how-to-use-modal-image"
            ></img>
            <ul className="how-to-use-modal-item-list">
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
                <li className="how-to-use-modal-items">
                  Сделать окрашивание или тонирование
                </li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">2</div>
                <li className="how-to-use-modal-items">Нагреть ботокс</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">3</div>
                <li className="how-to-use-modal-items">Приготовить состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">4</div>
                <li className="how-to-use-modal-items">Нанести состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">5</div>
                <li className="how-to-use-modal-items">Эффект паровой бани</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">6</div>
                <li className="how-to-use-modal-items">Остудить волосы</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">7</div>
                <li className="how-to-use-modal-items">Смыть состав</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">8</div>
                <li className="how-to-use-modal-items">Нанести маскариллу</li>
              </div>
              <div className="how-to-use-modal-items-row">
                <div className="how-to-use-modal-items-icon">9</div>
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
                  100% реконструкция волос
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Ламинирование цвета
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Фантастический блеск
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Сохранение цвета и стойкого результата
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
                  Краситель идеально растягивается
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Переходы цвета визуально выровнены
                </li>
              </div>
              <div className="how-to-use-modal-list-row">
                <FaCheckCircle className="how-to-use-modal-list-icon" />
                <li className="how-to-use-modal-list-item">
                  Появляется дополнительный блеск
                </li>
              </div>
            </ul>
          </div>
          <div className="how-to-use-modal-message-section">
            <div className="how-to-use-modal-message-body">
              <div className="how-to-use-modal-message-icon">!</div>
              <p className="how-to-use-modal-message-text">
                Уход проводится сразу же после окрашивания день в день.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUseModal4;
