import { useEffect, useState } from "react";
import "./ModalWindow.css";
import { RxCross1 } from "react-icons/rx";

function ModalWindow({ active, setActive, children, style }) {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  useEffect(() => {
    if (active)
      document.body.style = `overflow: hidden; margin-right: ${
        windowWidth <= 768 ? "0px" : "17px"
      }`;
    return () => (document.body.style = "overflow: visible");
  }, [active, windowWidth]);

  return (
    <div
      onClick={() => {
        setActive(false);
      }}
      className={active ? "modal-window active" : "modal-window"}
    >
      <div
        style={style}
        onClick={(e) => e.stopPropagation()}
        className={
          active ? "modal-window-content active" : "modal-window-content"
        }
      >
        {children}
        <RxCross1
          onClick={() => setActive(false)}
          className="modal-window-close"
        />
      </div>
    </div>
  );
}

export default ModalWindow;
