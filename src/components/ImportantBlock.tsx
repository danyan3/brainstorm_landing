import React, { useEffect } from "react";
import "@styles/important-block.css";
import exclamation from "@assets/images/exclamation.png";
import exclamation_big from "@assets/images/exclamation-big.png";
import { animate, inView } from "framer-motion";

const ImportantBlock: React.FC = () => {
  useEffect(() => {
    [
      ".important-block__title",
      ".important-block__list-item",
      ".important-block__footer",
      ".footer__contacts,.footer__rights",
    ].map((item, i) => {
      inView(item, ({ target }) => {
        animate(
          target,
          {
            opacity: [0, 1],
            y: [50, 0],
          },
          {
            duration: 1,
            delay: i / 2,
          }
        );
      });
    }, []);
  });

  return (
    <div className="important-block-container">
      <div className="star-1" />
      <div className="star-2" />
      <section className="important-block">
        <div className="important-block__content">
          <h2 className="important-block__title">Важно!</h2>
          <ul className="important-block__list">
            <li className="important-block__list-item">
              <span>
                Не занимаемся подбором сотрудников для оффлайн-съемок и
                съемочного процесса
              </span>
            </li>
            <li className="important-block__list-item">
              <span>
                Не используем накрутку или другие "серые" методы продвижения
              </span>
            </li>
            <li className="important-block__list-item">
              <span>Не продюсируем съемки</span>
            </li>
          </ul>
          <div className="important-block__footer">
            <div className="important-block__sub-title">
              BrainStorm Production
            </div>
            <div className="important-block__desc">
              медиа на грани искусства
            </div>
          </div>
        </div>
      </section>
      <img className="exclamation" src={exclamation} alt="Exclamation mark" />
      <img
        className="exclamation-big"
        src={exclamation_big}
        alt="Exclamation Big mark"
      />
    </div>
  );
};

export default ImportantBlock;
