import "./Cards.css";
import Card from "./Card";

function Cards() {
  return (
    <div className="cards-section">
      <div className="cards-container">
        <div className="cards-items">
          <Card
            title={
              <span>
                Ампульный ботокс
                <br />
                для волос KV-1
              </span>
            }
            src="/images/cards/img-1.png"
          />
          <Card
            title={
              <span>
                Процедуры
                <br />
                для волос KV-1
              </span>
            }
            src="/images/cards/img-2.png"
            showIcon
            cardWithDetails
          />
          <Card title="Обучение" src="/images/cards/img-3.png" />
          <Card title="Стать технологом" src="/images/cards/img-4.png" />
          <Card title="Счастье для бровей" src="/images/cards/img-5.png" />
          <Card
            title="Продукция для домашнего ухода"
            src="/images/cards/img-6.png"
          />
          <Card title="О компании" src="/images/cards/img-7.png" />
          <Card title="Контакты" src="/images/cards/img-8.png" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
