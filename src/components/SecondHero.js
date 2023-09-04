import "./SecondHero.css";
import Button from "./Button";

function SecondHero() {
  return (
    <div className="second-hero-section">
      <div className="second-hero-container">
        <div className="second-hero-body">
          <h2 className="second-hero-title">
            Нужны технические навыки в выполнении процедуры?
          </h2>
          <Button color="dark">Узнать подробнее про варианты обучения</Button>
        </div>
      </div>
    </div>
  );
}

export default SecondHero;
