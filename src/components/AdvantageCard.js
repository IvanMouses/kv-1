import "./AdvantageCard.css";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

function AdvantageCard({
  icon,
  title,
  text,
  moreInfo,
  moreInfoText,
  cursorStyle,
}) {
  const [moreInfoTextShown, setMoreInfoTextShown] = useState("");
  const moreInfoTextShownHandler = () => {
    !moreInfoTextShown
      ? setMoreInfoTextShown(moreInfoText)
      : setMoreInfoTextShown("");
  };
  const clickOutsideHandler = () => {
    setMoreInfoTextShown("");
  };
  const useOutsideClick = (callback) => {
    const ref = useRef();
    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) callback();
      };
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref, callback]);
    return ref;
  };
  const ref = useOutsideClick(clickOutsideHandler);

  return (
    <div
      ref={ref}
      onClick={moreInfoTextShownHandler}
      className="advantage-card-item"
      style={{ cursor: cursorStyle }}
    >
      <div className="advantage-card-title-section">
        <img alt="icon" src={icon} className="advantage-card-icon"></img>
        <h6 className="advantage-card-title">{title}</h6>
      </div>
      <div className="advantage-card-body-section">
        <p className="advantage-card-text">
          {text}
          {moreInfoTextShown && moreInfoText}
        </p>
      </div>
      {moreInfo && (
        <FaChevronDown
          className={
            moreInfoTextShown
              ? "advantage-more-info-icon-active"
              : "advantage-more-info-icon"
          }
        />
      )}
    </div>
  );
}

export default AdvantageCard;
