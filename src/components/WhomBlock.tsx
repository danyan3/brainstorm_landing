import React, { useEffect, useState } from "react";
import "@styles/whom-block.css";
import brilliant_youtube_button from "@assets/images/brilliant-youtube-button.png";
import { Element } from "react-scroll";
import { animate, inView, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const items = [
  {
    title: "Амбициозные Новички",
    desc: "Стартуйте в медиа-пространстве под нашим надёжным руководством и быстро достигайте первых результатов",
  },
  {
    title: "Опытные контент-мейкеры",
    desc: "Расширяем вашу аудиторию и повышаем вовлечённость, приводя ваш проект к новым вершинам",
  },
  {
    title: "Инфлюенсеры и публичные персоны",
    desc: "Автоматизируем любые процессы, повышая влияние и упрощая взаимодействие с аудиторией",
  },
  {
    title: "Творческие коллективы и студии",
    desc: "Даём вашему проекту мощный импульс и помогаем донести ваше творчество до широкой публики, выделяясь среди конкурентов",
  },
  {
    title: "Бизнесы всех размеров",
    desc: "Мы поддерживаем компании на всех этапах адаптации в медиа-среде, улучшая контент и взаимодействие с аудиторией",
  },
];

const step = 1 / items.length;
const betweenArr = items.map((_, i) => [step * i, step * (i + 1)]);

const WhomBlock: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    inView(".graph-container", ({ target }) => {
      animate(
        target,
        {
          opacity: [0, 1],
        },
        {
          duration: 2,
        }
      );
    });
  }, []);

  useEffect(() => {
    inView(".graph", ({ target }) => {
      animate(
        target,
        {
          clipPath: `polygon(0% 0%, ${
            ((progress + 0.15) * 100).toFixed(2) || 20
          }% 0%, ${((progress + 0.15) * 100).toFixed(2) || 20}% 100%, 0% 100%)`,
        },
        {
          duration: 0,
        }
      );
    });

    const index = betweenArr.findIndex(
      (between) => progress < between[1] && progress > between[0]
    );
    setStep(index === -1 ? 0 : index);
  }, [progress]);

  return (
    <Element id="whom" name="whom">
      <Parallax onProgressChange={(progress) => setProgress(progress)}>
        <div className="whom-block__parallax-container">
          <div id="whom" className="whom-block-container">
            <div className="whom-block-bg" />
            <section className="whom-block">
              <h2 className="whom-block__title">Для кого наши услуги?</h2>
              <div className="whom-block__content">
                {items.map((item, i) => {
                  return (
                    <motion.div
                      key={item.title}
                      className={`item-animation ${
                        step >= i ? "item-animation__animate" : ""
                      } ${
                        progress <= betweenArr[i][1] &&
                        progress >= betweenArr[i][0]
                          ? "item-animation__sm-animate"
                          : "item-animation__sm-hidden"
                      }`}
                    >
                      <section className={`whom-item whom-item-${i + 1}`}>
                        <div className="whom-item__title">{item.title}</div>
                        <p className="whom-item__text">{item.desc}</p>
                        <div className="graph-point">
                          <div className="graph-point__ellipse-1" />
                          <div className="graph-point__ellipse-2" />
                          <div className="graph-point__ellipse-3" />
                        </div>
                      </section>
                    </motion.div>
                  );
                })}
                <div className="graph-container">
                  <div className="graph" />
                </div>
              </div>
            </section>

            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileInView={{ y: [0, 20, 0], x: [0, 3, 0, -3, 0], opacity: 1 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="brilliant-youtube-button"
            >
              <motion.img
                initial={{ y: -50, x: -50, opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                src={brilliant_youtube_button}
                alt="Brilliant YouTube Button"
              />
            </motion.div>

            <div className="star-1" />
          </div>{" "}
        </div>
      </Parallax>
    </Element>
  );
};

export default WhomBlock;
