import "./showcase.scss";

import React from "react";
import showcaseimg from "../../assets/showcase.png";
import showcaseimg__svg from "../../assets/svg1.svg";
const Showcase = () => {
  return (
    <div className="showcase__main">
      <div className="all_showcase">
        <div className="container">
          <h1>Беседки под ключ за 7 дней</h1>
          <div className="showcase__bottom">
            <p>Выгода до 24%</p>
            <p>Сборка за 1 день</p>
          </div>
        </div>
      </div>

      <div className="showcase__bottom-card">
        <div className="container">
          <div className="bottom__card">
            <img src={showcaseimg__svg} alt="" />
            <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>
          <div className="bottom__card">
            <img src={showcaseimg__svg} alt="" />
            <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>
          <div className="bottom__card">
            <img src={showcaseimg__svg} alt="" />
            <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>
          <div className="bottom__card">
            <img src={showcaseimg__svg} alt="" />
            <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>
          <div className="bottom__card">
            <img src={showcaseimg__svg} alt="" />
            <p>Изготовливаем конструкции по вашему дизайн-проекту</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
