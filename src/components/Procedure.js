import "./Procedure.css";
import { FiCheckSquare } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Procedure() {
  const [activeTab, setActiveTab] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);
  const toggleActiveTabHandler = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="procedure-section">
      <div className="procedure-container">
        <div className="procedure-body">
          <div className="procedure-info-section">
            <h2 className="procedure-info-title">Процедура</h2>
            <p className="procedure-info-text">
              Это инновационная разработка по реконструкции волос №1 в мире,
              созданная конгломератом испанских ученых. В России с 2014 года
              занимает лидирующие позиции среди всех восстанавливающих процедур
              холодного типа.
            </p>
            <p className="procedure-info-text">
              После правильного и последовательного применения всех 4
              ингредиентов, входящих в процедуру, происходит полное
              восстановление поврежденных прядей, интенсивное и глубокое
              увлажнение и питание, появляется блеск, шелковистость и мягкость.
            </p>
            <p className="procedure-info-text">
              Здоровье и безопасность мы ставим на первое место, поэтому
              процедура проводится:
            </p>
            <ul className="procedure-info-list">
              <div className="procedure-info-item-row">
                <FiCheckSquare className="procedure-info-item-icon" />
                <li className="procedure-info-item">Без утюжка</li>
              </div>
              <div className="procedure-info-item-row">
                <FiCheckSquare className="procedure-info-item-icon" />
                <li className="procedure-info-item">Без формальдегида</li>
              </div>
              <div className="procedure-info-item-row">
                <FiCheckSquare className="procedure-info-item-icon" />
                <li className="procedure-info-item">Без выпрямления волос</li>
              </div>
            </ul>
          </div>
          <div className="procedure-tab-section">
            <div className="procedure-tab-container">
              <div className="procedure-tab-tabs">
                <div
                  onClick={() => toggleActiveTabHandler(1)}
                  className={
                    activeTab === 1
                      ? "procedure-tab procedure-tab-active"
                      : "procedure-tab"
                  }
                >
                  ЭТАП 1
                </div>
                <div
                  onClick={() => toggleActiveTabHandler(2)}
                  className={
                    activeTab === 2
                      ? "procedure-tab procedure-tab-active"
                      : "procedure-tab"
                  }
                >
                  ЭТАП 2
                </div>
                <div
                  onClick={() => toggleActiveTabHandler(3)}
                  className={
                    activeTab === 3
                      ? "procedure-tab procedure-tab-active"
                      : "procedure-tab"
                  }
                >
                  ЭТАП 3.1
                </div>
                <div
                  onClick={() => toggleActiveTabHandler(4)}
                  className={
                    activeTab === 4
                      ? "procedure-tab procedure-tab-active"
                      : "procedure-tab"
                  }
                >
                  ЭТАП 3.2
                </div>
                <div
                  onClick={() => toggleActiveTabHandler(5)}
                  className={
                    activeTab === 5
                      ? "procedure-tab procedure-tab-active"
                      : "procedure-tab"
                  }
                >
                  ЭТАП 4
                </div>
              </div>
              <div className="procedure-tab-content-container">
                <div
                  className={
                    activeTab === 1
                      ? "procedure-tab-content procedure-tab-content-active"
                      : "procedure-tab-content"
                  }
                >
                  <div className="procedure-tab-content-heading">
                    <img
                      alt="procedure component"
                      src="/images/procedure/img-1.png"
                      className="procedure-tab-content-image"
                    ></img>
                    <div className="procedure-tab-content-title-container">
                      <h2 className="procedure-tab-content-title">
                        Активатор KV-1 <br /> (250 мл)
                      </h2>
                      <h3 className="procedure-tab-content-subtitle">
                        Активные компоненты:
                      </h3>
                      <p className="procedure-tab-content-text">
                        гидролизованный коллаген, гидролизованный кератин,
                        экстракт дрожжей, масла: оливы, виноградных косточек,
                        витамины: В1, В2, В3, провитамин В5 (пантенол), В6,
                        аминокислоты, антиоксиданты, микроэлементы
                      </p>
                    </div>
                  </div>
                  {windowWidth === 375 && (
                    <p className="procedure-tab-content-text-mobile">
                      гидролизованный коллаген, гидролизованный кератин,
                      экстракт дрожжей, масла: оливы, виноградных косточек,
                      витамины: В1, В2, В3, провитамин В5 (пантенол), В6,
                      аминокислоты, антиоксиданты, микроэлементы
                    </p>
                  )}
                  <div className="procedure-tab-content-list-container">
                    <h6 className="procedure-tab-content-list-title">
                      Специальное средство для подготовки волос к процедуре:
                    </h6>
                    <ul className="procedure-tab-content-list">
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          является мощным кератиновым бустером
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          протезирует поврежденные участки и заполняет пустоты
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          увеличивает механическую прочность и улучшает
                          структуру волос
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          способствует сохранению влаги в структуре волоса
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          обеспечивает питание волос
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          антиэйджинговый комплекс омолаживает и укрепляет
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="procedure-tab-bottom-text-container">
                    <h6 className="procedure-tab-bottom-text-text">РН 3,30</h6>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 2
                      ? "procedure-tab-content procedure-tab-content-active"
                      : "procedure-tab-content"
                  }
                >
                  <div className="procedure-tab-content-heading">
                    <img
                      alt="procedure component"
                      src="/images/procedure/img-2.png"
                      className="procedure-tab-content-image"
                    ></img>
                    <div className="procedure-tab-content-title-container">
                      <h2 className="procedure-tab-content-title">
                        Шампунь KV-1 <br /> (250 мл или 500 мл)
                      </h2>
                      <h3 className="procedure-tab-content-subtitle">
                        Активные компоненты:
                      </h3>
                      <p className="procedure-tab-content-text">
                        гидролизованный коллаген, гидролизованный кератин,
                        экстракты: маракуйи, дрожжей, витамины: А,В1, В2, В3,
                        провитамин В5 (пантенол), В6, С, Е
                      </p>
                    </div>
                  </div>
                  {windowWidth === 375 && (
                    <p className="procedure-tab-content-text-mobile">
                      гидролизованный коллаген, гидролизованный кератин,
                      экстракты: маракуйи, дрожжей, витамины: А,В1, В2, В3,
                      провитамин В5 (пантенол), В6, С, Е
                    </p>
                  )}
                  <div className="procedure-tab-content-list-container">
                    <ul className="procedure-tab-content-list">
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          очищает волосы и кожу головы от загрязнений и
                          укладочных средств
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          обеспечивает питание волосяных фолликулов
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          проявляет антиоксидантные свойства на коже и помогать
                          стимулировать активность волосяных луковиц,
                          обеспечивая луковицу полезными веществами
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          уменьшает сухость кожи головы
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          восстанавливает жировой баланс кожи головы
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="procedure-tab-bottom-text-container">
                    <h6 className="procedure-tab-bottom-text-text">РН 5,30</h6>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 3
                      ? "procedure-tab-content procedure-tab-content-active"
                      : "procedure-tab-content"
                  }
                >
                  <div className="procedure-tab-content-heading">
                    <img
                      alt="procedure component"
                      src="/images/procedure/img-3.png"
                      className="procedure-tab-content-image"
                    ></img>
                    <div className="procedure-tab-content-title-container">
                      <h2 className="procedure-tab-content-title">
                        Ампульный холодный ботокс L+B2 <br /> (20 мл)
                      </h2>
                      <h3 className="procedure-tab-content-subtitle">
                        Активные компоненты:
                      </h3>
                      <p className="procedure-tab-content-text">
                        экстракт ягод Асаи, провитамин В5 (пантенол), витамин Е,
                        аминокислоты, антиоксиданты
                      </p>
                    </div>
                  </div>
                  {windowWidth === 375 && (
                    <p className="procedure-tab-content-text-mobile">
                      экстракт ягод Асаи, провитамин В5 (пантенол), витамин Е,
                      аминокислоты, антиоксиданты
                    </p>
                  )}
                  <div className="procedure-tab-content-list-container">
                    <h6 className="procedure-tab-content-list-title">
                      Первый и единственный реконструктор волос с натуральным
                      составом.
                    </h6>
                    <ul className="procedure-tab-content-list">
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          реставрирует кортекс волос
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          уплотняет стержень
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          структурирует чешуйчатый слой
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          увлажняет, питает, обеспечивает мягкость
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          возвращает природный блеск и гладкость волосам
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          устраняет секущиеся кончики
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="procedure-tab-bottom-text-container">
                    <h6 className="procedure-tab-bottom-text-text">РН 3,80</h6>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 4
                      ? "procedure-tab-content procedure-tab-content-active"
                      : "procedure-tab-content"
                  }
                >
                  <div className="procedure-tab-content-heading">
                    <img
                      alt="procedure component"
                      src="/images/procedure/img-4.png"
                      className="procedure-tab-content-image"
                    ></img>
                    <div className="procedure-tab-content-title-container">
                      <h2 className="procedure-tab-content-title">
                        Ампульный холодный ботокс Arctic Blue <br /> (20 мл)
                      </h2>
                      <h3 className="procedure-tab-content-subtitle">
                        Активные компоненты:
                      </h3>
                      <p className="procedure-tab-content-text">
                        протеин риса, экстракты: ягод Асаи, риса, дрожжей,
                        провитамин В5 (пантенол), витамин Е, фитиновая кислота,
                        аминокислоты, антиоксиданты
                      </p>
                    </div>
                  </div>
                  {windowWidth === 375 && (
                    <p className="procedure-tab-content-text-mobile">
                      протеин риса, экстракты: ягод Асаи, риса, дрожжей,
                      провитамин В5 (пантенол), витамин Е, фитиновая кислота,
                      аминокислоты, антиоксиданты
                    </p>
                  )}
                  <div className="procedure-tab-content-list-container">
                    <h6 className="procedure-tab-content-list-title">
                      Первый и единственный реконструктор волос с натуральным
                      составом.
                    </h6>
                    <ul className="procedure-tab-content-list">
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          восстанавливает поврежденную структуру волос
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          препятствует вымыванию красителя
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          продлевает время нахождения холодного пигмента и ярких
                          красителей
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          делает цвет волос более глубоким и насыщенным с
                          роскошными переливами
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          защищает от выгорания и тусклости
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          устраняет секущиеся кончики
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="procedure-tab-bottom-text-container">
                    <h6 className="procedure-tab-bottom-text-text">РН 3,80</h6>
                  </div>
                </div>
                <div
                  className={
                    activeTab === 5
                      ? "procedure-tab-content procedure-tab-content-active"
                      : "procedure-tab-content"
                  }
                >
                  <div className="procedure-tab-content-heading">
                    <img
                      alt="procedure component"
                      src="/images/procedure/img-5.png"
                      className="procedure-tab-content-image"
                    ></img>
                    <div className="procedure-tab-content-title-container">
                      <h2 className="procedure-tab-content-title">
                        Несмываемая маска Маскарилла KV-1 <br /> (50 мл)
                      </h2>
                      <h3 className="procedure-tab-content-subtitle">
                        Активные компоненты:
                      </h3>
                      <p className="procedure-tab-content-text">
                        гидролизованный кератин, экстракты: апельсина, сои,
                        лимона, грейпфрута, масла: арганы, оливы, кунжута,
                        виноградных косточек, провитамин В5 (пантенол)
                      </p>
                    </div>
                  </div>
                  {windowWidth === 375 && (
                    <p className="procedure-tab-content-text-mobile">
                      гидролизованный кератин, экстракты: апельсина, сои,
                      лимона, грейпфрута, масла: арганы, оливы, кунжута,
                      виноградных косточек, провитамин В5 (пантенол)
                    </p>
                  )}
                  <div className="procedure-tab-content-list-container">
                    <ul className="procedure-tab-content-list">
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          запечатывает и пролонгирует действие активного состава
                          внутри волоса
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          плотно закрывает чешуйки к стволу волоса, придавая
                          блеск и гладкость
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          предупреждает быстрое вымывание краски, надолго
                          сохраняя цвет
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          улучшает способность волос к укладке, предупреждает
                          электризацию волос, облегчает расчесывание
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          содействует формированию объема и помогает
                          контролировать непослушные волосы
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          защищает от перепадов температур, влажности или
                          сухости воздуха
                        </li>
                      </div>
                      <div className="procedure-tab-content-item-row">
                        <FaCheckCircle className="procedure-tab-content-item-icon" />
                        <li className="procedure-tab-content-item">
                          термозащита
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="procedure-tab-bottom-text-container">
                    <h6 className="procedure-tab-bottom-text-text">РН 6,00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Procedure;
