import "./AdvantageCards.css";
import { useState, useEffect } from "react";
import AdvantageCard from "./AdvantageCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function AdvantageCards() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  const slideToRightHandler = () => {
    if (windowWidth === 768) {
      if (currentSlidePosition <= 0) {
        setCurrentSlidePosition(currentSlidePosition - 180);
      }
      if (currentSlidePosition === -180 * n) {
        setCurrentSlidePosition(0);
      }
    }
    if (windowWidth === 375) {
      if (currentSlidePosition <= 0) {
        setCurrentSlidePosition(currentSlidePosition - 200);
      }
      if (currentSlidePosition === -200 * n) {
        setCurrentSlidePosition(0);
      }
    }
  };
  const slideToLeftHandler = () => {
    if (windowWidth === 768) {
      if (currentSlidePosition < 0) {
        setCurrentSlidePosition(currentSlidePosition + 180);
      }
      if (currentSlidePosition === 0) {
        setCurrentSlidePosition(-180 * n);
      }
    }
    if (windowWidth === 375) {
      if (currentSlidePosition < 0) {
        setCurrentSlidePosition(currentSlidePosition + 200);
      }
      if (currentSlidePosition === 0) {
        setCurrentSlidePosition(-200 * n);
      }
    }
  };

  const n = 13;

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  return (
    <div className="advantage-section">
      <h2 className="advantage-title">Преимущества процедуры</h2>
      {
        <>
          <FaChevronRight
            style={
              currentSlidePosition === -180 * n ||
              currentSlidePosition === -200 * n
                ? { display: "none" }
                : { display: `${windowWidth <= 768 ? "block" : "none"}` }
            }
            onClick={slideToRightHandler}
            className="advantage-slider-button-right"
          />
          <FaChevronLeft
            style={
              currentSlidePosition === 0
                ? { display: "none" }
                : { display: "block" }
            }
            onClick={slideToLeftHandler}
            className="advantage-slider-button-left"
          />
        </>
      }
      <div
        style={{
          transition: `all ${0.3}s`,
          transform: `translateX(${currentSlidePosition}px)`,
        }}
        className="advantage-container"
      >
        <div className="advantage-items">
          <AdvantageCard
            icon="/images/advantage/img-1.png"
            title="Без утюжка"
            text="Процедура восстановления волос выполняется без утюжка/плойки (подходит
          для очень поврежденных волос)."
            moreInfo={true}
            moreInfoText=" Холодный ботокс для волос деликатно восстанавливает волосы по всей длине. Ботокс для волос без утюжка это продукт нового поколения!"
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-2.png"
            title="Без 
            запаха"
            text="KV-1 это холодный ботокс для волос без неприятных, химических запахов."
            moreInfo={true}
            moreInfoText=" Вся процедура соткана из премиальных парфюмерных нот, которые поднимают настроение, а после ритуала на волосах останется волнующий шлейфовый аромат."
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-3.png"
            title="Без выпрямления волос"
            text="Ботокс для волос KV-1 не выпрямляет и не утяжеляет волосы, а так же не уменьшает объем."
            moreInfo={true}
            moreInfoText=" После процедуры можно сделать абсолютно любую укладку."
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-4.png"
            title="Без 
            формальдегида"
            text="Препараты для выполнения процедуры Холодный ботокс для волос KV-1 не содержат формальдегид и его производные, формалин, аммиак."
            moreInfo={false}
          />
          <AdvantageCard
            icon="/images/advantage/img-5.png"
            title="Без 
            перчаток"
            text="Состав ботокса для волос KV-1 содержит пантенол (провитамин В5)."
            moreInfo={true}
            moreInfoText=" Смело работайте без перчаток, увлажнение рук пойдет Вам только на пользу!"
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-6.png"
            title="Без 
            ботулотоксина"
            text="Препараты для выполнения процедуры Холодный ботокс для волос KV-1 не содержат ботулотоксин."
            moreInfo={false}
          />
          <AdvantageCard
            icon="/images/advantage/img-7.png"
            title="Всего
            1 час"
            text="Длительность процедуры в салоне занимает всего 1 час. За 1 рабочий день вы сможете сделать счастливыми 8-10 своих клиентов."
            moreInfo={false}
          />
          <AdvantageCard
            icon="/images/advantage/img-8.png"
            title="Прост 
            в применении"
            text="Всего 4 этапа для полного восстановления и регенерации волос."
            moreInfo={false}
          />
          <AdvantageCard
            icon="/images/advantage/img-9.png"
            title="Только для профессионалов"
            text="Продукция для выполнения процедуры Холодный ботокс для волос KV-1 продается только представителям салонов красоты или мастерам."
            moreInfo={false}
          />
          <AdvantageCard
            icon="/images/advantage/img-10.png"
            title="Для всех типов волос"
            text="Процедура восстановления волос подходит для всех типов волос:"
            moreInfo={true}
            moreInfoText={
              <ul>
                <li>— для нормальных</li>
                <li>— для кудрявых</li>
                <li>— для вьющихся</li>
                <li>— для тонких</li>
                <li>— для сухих</li>
                <li>— для жирных</li>
                <li>— для комбинированных</li>
                <li>— для поврежденных</li>
              </ul>
            }
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-11.png"
            title="Не меняет 
            оттенок"
            text="Холодный ботокс для волос KV-1 не меняет оттенок и подходит для любого цвета волос:"
            moreInfo={true}
            moreInfoText={
              <ul>
                <li>— для блондинок</li>
                <li>— для русых</li>
                <li>— для шатенок</li>
                <li>— для брюнеток</li>
                <li>— для седых</li>
                <li>— для рыжих</li>
              </ul>
            }
            cursorStyle="pointer"
          />
          <AdvantageCard
            icon="/images/advantage/img-12.png"
            title="5 способов применения"
            text="Ботокс KV-1 можно использовать как отдельную процедуру, так и в комбинации с краской при окрашивании:"
            moreInfo={true}
            moreInfoText={
              <ul>
                <li>— до окрашивания</li>
                <li>— во время окрашивания</li>
                <li>— после окрашивания</li>
                <li>— добавление в краску</li>
              </ul>
            }
            cursorStyle="pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AdvantageCards;
