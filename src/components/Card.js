import "./Card.css";
import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function Card({ title, src, showIcon, cardWithDetails }) {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = () => {
    !showDetails ? setShowDetails(true) : setShowDetails(false);
  };
  const clickOutsideHandler = () => {
    setShowDetails(false);
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
    <>
      {cardWithDetails ? (
        <button ref={ref} className="cards-item">
          <div
            className="card-body"
            onClick={cardWithDetails && showDetailsHandler}
          >
            <div
              className={`${
                showDetails
                  ? "card-title-body card-title-body-active"
                  : "card-title-body"
              }`}
            >
              <h2 className="card-title">{title}</h2>
              {showIcon && (
                <FaAngleDoubleDown
                  style={{ color: "#fff" }}
                  className={
                    showDetails ? "card-icon card-icon-active" : "card-icon"
                  }
                />
              )}
            </div>
            <ul
              className={`${
                showDetails ? "card-list card-list-active" : "card-list"
              }`}
            >
              <li className="card-item">
                <a href="/" className="card-link">
                  SPA для волос KV-1
                </a>
              </li>
              <li className="card-item">
                <a href="/" className="card-link">
                  Биоревитализация для волос KV-1
                </a>
              </li>
              <li className="card-item">
                <a href="/" className="card-link">
                  Фитореконструкция для волос KV-1
                </a>
              </li>
            </ul>
            <img alt="card item" src={src} className="card-background"></img>
          </div>
        </button>
      ) : (
        <a href="/" className="cards-item">
          <div className="card-body">
            <div
              onClick={cardWithDetails && showDetailsHandler}
              className={`${
                showDetails
                  ? "card-title-body card-title-body-active"
                  : "card-title-body"
              }`}
            >
              <h2 className="card-title">{title}</h2>
              {showIcon && (
                <FaAngleDoubleDown
                  style={{ color: "#fff" }}
                  className={
                    showDetails ? "card-icon card-icon-active" : "card-icon"
                  }
                />
              )}
            </div>
            <img alt="card item" src={src} className="card-background"></img>
          </div>
        </a>
      )}
    </>
  );
}

export default Card;
