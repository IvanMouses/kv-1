import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import ModalWindow from "./ModalWindow";
import FormModal from "./FormModal";
import { FaAngleDown } from "react-icons/fa";
import "./Form.css";

function Form({ wideForm }) {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputJob, setInputJob] = useState("");
  const [validInputName, setValidInputName] = useState(false);
  const [validInputPhone, setValidInputPhone] = useState(false);
  const [invalidInputNameClass, setInvalidInputNameClass] = useState(false);
  const [invalidInputPhoneClass, setInvalidInputPhoneClass] = useState(false);
  const [showSelect, setSelect] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalTemplate, setModalTemplate] = useState(1);
  const closeModalHandler = () => {
    setModalActive(false);
  };
  const validInputNameHandler = () => {
    inputName ? setValidInputName(true) : setValidInputName(false);
    inputName
      ? setInvalidInputNameClass(false)
      : setInvalidInputNameClass(true);
  };
  const validInputPhoneHandler = () => {
    inputPhone ? setValidInputPhone(true) : setValidInputPhone(false);
    inputPhone
      ? setInvalidInputPhoneClass(false)
      : setInvalidInputPhoneClass(true);
  };
  const formValidation = (e) => {
    e.preventDefault();
    if (validInputName && validInputPhone) {
      setModalActive(true);
      setModalTemplate(2);
      setTimeout(() => {
        setValidInputName(false);
        setValidInputPhone(false);
        setInputName("");
        setInputPhone("");
        setInputJob("");
        closeModalHandler();
      }, 3000);
    } else {
      setInvalidInputNameClass(true);
      setInvalidInputPhoneClass(true);
    }
  };
  const selectHandler = () => {
    !showSelect ? setSelect(true) : setSelect(false);
  };
  const clickOutsideHandler = () => {
    setSelect(false);
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
      <form
        className={
          wideForm
            ? "form form-callback form form-callback-wide"
            : "form form-callback"
        }
      >
        <div
          className={
            validInputName
              ? `${
                  wideForm
                    ? "form-input-row form-input-row-wide"
                    : "form-input-row"
                }`
              : `${
                  wideForm
                    ? `form-input-row form-input-row-wide invalid-input ${
                        invalidInputNameClass && "active"
                      }`
                    : `form-input-row invalid-input ${
                        invalidInputNameClass && "active"
                      }`
                }`
          }
        >
          <input
            required
            onChange={(e) => setInputName(e.target.value)}
            onBlur={validInputNameHandler}
            value={inputName}
            type="text"
            placeholder="Ваше имя"
            className={
              wideForm
                ? "form-input form-input-wide input-name"
                : "form-input input-name"
            }
          ></input>
        </div>
        <div
          ref={ref}
          onClick={selectHandler}
          className={
            wideForm
              ? `form-input-row form-input-row-wide icon-row icon-row-wide ${
                  showSelect && "icon-row-active"
                }`
              : `form-input-row icon-row ${showSelect && "icon-row-active"}`
          }
        >
          <input
            onChange={() => ""}
            value={inputJob}
            placeholder="Ваш род деятельности"
            type="text"
            className={
              wideForm
                ? `form-input input-job form-input-wide input-job-wide ${
                    showSelect ? "input-job-active" : ""
                  }`
                : `form-input input-job ${showSelect ? "input-job-active" : ""}`
            }
          ></input>
          <div
            className={`form-input-select ${
              showSelect ? "form-input-select-active" : ""
            }`}
          >
            <ul
              onClick={(e) => setInputJob(e.target.textContent)}
              className={
                wideForm
                  ? "form-input-select-list form-input-select-list-wide"
                  : "form-input-select-list"
              }
            >
              <li className="form-input-select-item">
                <p className="form-input-select-value">
                  Владелец/Управляющий салона
                </p>
              </li>
              <li className="form-input-select-item">
                <p className="form-input-select-value">Парикмахер</p>
              </li>
              <li className="form-input-select-item">
                <p className="form-input-select-value">Частное лицо</p>
              </li>
            </ul>
          </div>
          <FaAngleDown
            style={{ color: "#454545" }}
            className={`form-input-icon ${
              showSelect ? "form-input-icon-active" : ""
            }`}
          />
        </div>
        <div
          className={
            validInputPhone
              ? `${
                  wideForm
                    ? "form-input-row form-input-row-wide"
                    : "form-input-row"
                }`
              : `${
                  wideForm
                    ? `form-input-row form-input-row-wide invalid-input ${
                        invalidInputPhoneClass && "active"
                      }`
                    : `form-input-row invalid-input ${
                        invalidInputPhoneClass && "active"
                      }`
                }`
          }
        >
          <input
            required
            onChange={(e) => setInputPhone(e.target.value)}
            onBlur={validInputPhoneHandler}
            value={inputPhone}
            placeholder="Телефон"
            type="text"
            className={
              wideForm
                ? "form-input form-input-wide input-phone"
                : "form-input input-phone"
            }
          ></input>
        </div>
        <div
          className={
            wideForm ? "form-input-row form-input-row-wide" : "form-input-row"
          }
        >
          <Button onClick={formValidation} type="submit" color="light">
            Отправить
          </Button>
        </div>
      </form>
      {modalTemplate === 2 && (
        <ModalWindow active={modalActive} setActive={setModalActive}>
          <FormModal
            setActive={setModalActive}
            template={modalTemplate}
            setTemplate={setModalTemplate}
          />
        </ModalWindow>
      )}
    </>
  );
}

export default Form;
