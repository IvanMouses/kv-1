import "./Slide.css";
import { BsArrowRight } from "react-icons/bs";

function Slide({ slides, slideIndex, onClick }) {
  return (
    <div onClick={onClick} className="slide">
      <img
        alt="feedback pic"
        src={slides[slideIndex].image}
        className="slide-image"
      ></img>
      <div className="slide-main-container-wrapper">
        <div className="slide-body">
          <h5 className="slide-title">{slides[slideIndex].title}</h5>
          <h6 className="slide-subtitle">{slides[slideIndex].subTitle}</h6>
          <p className="slide-text">{slides[slideIndex].text}</p>
        </div>
        <button type="button" className="slide-button-info">
          Подробнее
          <BsArrowRight className="slide-icon-info" />
        </button>
      </div>
    </div>
  );
}

export default Slide;
