import "./SlideModal.css";
import slides from "./slides";

function SlideModal({ index }) {
  return (
    <div className="slide-modal-container">
      <div className="slide-modal-image-body">
        <img
          alt="feedback pic"
          src={slides[index].image}
          className="slide-image"
        ></img>
      </div>
      <div className="slide-modal-main-container-wrapper">
        <div className="slide-modal-body">
          <h5 className="slide-modal-title">{slides[index].title}</h5>
          <h6 className="slide-modal-subtitle">{slides[index].subTitle}</h6>
          <p className="slide-modal-text">{slides[index].text}</p>
        </div>
      </div>
    </div>
  );
}

export default SlideModal;
