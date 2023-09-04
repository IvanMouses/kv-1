import { useState } from "react";
import "./AboutKv1.css";
import aboutKv1Desc from "./aboutKv1Desc";
import { FaRegPlayCircle } from "react-icons/fa";
import { TbClick } from "react-icons/tb";

function AboutKv1() {
  const [currentTextContent, setCurrentTextContent] = useState(0);
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="about-title">Что такое Ампульный ботокс KV-1</h2>
        <div className="about-items">
          <div
            onClick={() => setCurrentTextContent(0)}
            className="about-video-item about-item"
          >
            <img
              alt="about"
              src="/images/about/background.png"
              className="about-video-background about-background"
            ></img>
            <FaRegPlayCircle className="about-video-play-icon" />
          </div>
          <div
            onClick={() => setCurrentTextContent(1)}
            className="about-master-item about-item"
          >
            <img
              alt="master"
              src="/images/about/master.png"
              className="about-master-background about-background"
            ></img>
            <div className="about-master-title-body about-item-title-body">
              <div className="about-item-title-background">
                <TbClick className="about-item-click-icon" />
                <h6 className="about-master-title about-item-title">
                  Для мастера
                </h6>
              </div>
            </div>
          </div>
          <div className="about-desc-item">
            {aboutKv1Desc[currentTextContent].content}
          </div>
          <div
            onClick={() => setCurrentTextContent(2)}
            className="about-client-item about-item"
          >
            <img
              alt="client"
              src="/images/about/client.png"
              className="about-client-background about-background"
            ></img>
            <div className="about-client-title-body about-item-title-body">
              <div className="about-item-title-background">
                <TbClick className="about-item-click-icon" />
                <h6 className="about-client-title about-item-title">
                  Для клиента
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutKv1;
