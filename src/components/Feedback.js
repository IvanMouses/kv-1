import "./Feedback.css";
import Slider from "./Slider";

function Feedback() {
  return (
    <div className="feedback-section">
      <div className="feedback-container">
        <div className="feedback-title-container">
          <h2 className="feedback-title">Отзывы</h2>
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default Feedback;
