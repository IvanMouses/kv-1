import "./Slider.css";
import Slide from "./Slide";
import slides from "./slides";
import ModalWindow from "./ModalWindow";
import SlideModal from "./SlideModal";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Slider() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);
  const setModalActiveHandler = (index) => {
    setIndex(index);
    slides[index].id === index ? setModalActive(true) : setModalActive(false);
  };

  const slideToRightHandler = () => {
    if (currentSlidePosition <= 0) {
      setCurrentSlidePosition(currentSlidePosition - 362);
    }
    if (currentSlidePosition === -362 * n) {
      setCurrentSlidePosition(0);
    }
  };
  const slideToLeftHandler = () => {
    if (currentSlidePosition < 0) {
      setCurrentSlidePosition(currentSlidePosition + 362);
    }
    if (currentSlidePosition === 0) {
      setCurrentSlidePosition(-362 * n);
    }
  };

  const sliderStyle = {
    transition: `all ${0.3}s`,
    transform: `translateX(${currentSlidePosition}px)`,
    justifyContent: `${slides.length < 4 ? "center" : "flex-start"}`,
  };

  const sliderButtonsStyle = {
    display: "block",
  };

  let n = slides.length - 3;
  if (windowWidth === 768) {
    n = slides.length - 2;
  }
  if (windowWidth === 375) {
    n = slides.length - 1;
  }

  return (
    <>
      <div className="slider-wrapper">
        <div style={sliderStyle} className="slider">
          <Slide
            onClick={() => setModalActiveHandler(0)}
            slides={slides}
            slideIndex={0}
          />
          <Slide
            onClick={() => setModalActiveHandler(1)}
            slides={slides}
            slideIndex={1}
          />
          <Slide
            onClick={() => setModalActiveHandler(2)}
            slides={slides}
            slideIndex={2}
          />
          <Slide
            onClick={() => setModalActiveHandler(3)}
            slides={slides}
            slideIndex={3}
          />
          <Slide
            onClick={() => setModalActiveHandler(4)}
            slides={slides}
            slideIndex={4}
          />
          <Slide
            onClick={() => setModalActiveHandler(5)}
            slides={slides}
            slideIndex={5}
          />
        </div>
      </div>
      <FaChevronRight
        style={
          slides.length < 4 || currentSlidePosition === -362 * n
            ? { display: "none" }
            : sliderButtonsStyle
        }
        onClick={slideToRightHandler}
        className="slider-right-button"
      ></FaChevronRight>
      <FaChevronLeft
        style={
          slides.length < 4 || currentSlidePosition === 0
            ? { display: "none" }
            : sliderButtonsStyle
        }
        onClick={slideToLeftHandler}
        className="slider-left-button"
      ></FaChevronLeft>
      <ModalWindow
        style={{ padding: "0px" }}
        active={modalActive}
        setActive={setModalActive}
      >
        <SlideModal index={index} />
      </ModalWindow>
    </>
  );
}

export default Slider;
