import React, { useEffect, useState } from "react";
import "@styles/usage-block.css";
import zhopa from "@assets/images/ZHOPA.gif";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    gif: zhopa,
    text: (
      <p>
        Найдите нашего ботика в поиске и нажмите{" "}
        <span className="steps__text_gradient">кнопку «Старт».</span>
      </p>
    ),
  },
  {
    gif: zhopa,
    text: (
      <p>
        Перемещайтесь между разделами, используя
        <span className="steps__text_gradient">удобные кнопки</span>
      </p>
    ),
  },
  {
    gif: zhopa,
    text: (
      <p>
        <span className="steps__text_gradient">Выберите нужную услугу</span> и
        следуйте инструкциям бота, заполнив нужные поля
      </p>
    ),
  },

  {
    gif: zhopa,
    text: (
      <p>
        После подтверждения заказа,{" "}
        <span className="steps__text_gradient">бот пришлёт уведомление</span>{" "}
        для оплаты
      </p>
    ),
  },
];
const step = 1 / items.length;
const betweenArr = items.map((_, i) => [step * i, step * (i + 1)]);

const steps: JSX.Element[] = [
  <>
    Найдите нашего ботика в поиске и нажмите{" "}
    <span className="steps__text_gradient">кнопку «Старт».</span>
  </>,
  <>
    Перемещайтесь между разделами, используя{" "}
    <span className="steps__text_gradient">удобные кнопки</span>
  </>,
  <>
    <span className="steps__text_gradient">Выберите нужную услугу</span> и
    следуйте инструкциям бота, заполнив нужные поля
  </>,
  <>
    После подтверждения заказа,{" "}
    <span className="steps__text_gradient">бот пришлёт уведомление</span> для
    оплаты
  </>,
];

const UsageBlock: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const index = betweenArr.findIndex(
      (between) => progress < between[1] && progress > between[0]
    );
    setStep(index === -1 ? 0 : index);
  }, [progress]);

  const renderSteps = () => {
    return (
      <div className="usage-block__steps">
        {items.map((item, i) => (
          <div
            key={`${item.gif}_${i}`}
            className={`usage-block__step usage-block__step_${
              step === i ? "selected" : "0"
            }`}
          >
            {step === i ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`usage-block__step usage-block__step_${
                  step === i ? "selected" : "0"
                }`}
              >
                <motion.span className="step__number-text">
                  0{i + 1}
                </motion.span>
              </motion.div>
            ) : (
              <span
                className={`step__point_o-${100 - Math.abs(0 - step) * 25}`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <Element name="how-to-use" key={step} id="how-to-use">
        <div className="usage-block-container">
          <div className="star-1" />
          <i className="usage-block__spark-1" />
          <i className="usage-block__spark-2" />
          <section className="usage-block">
            <h2 className="usage-block__title">
              Как пользоваться нашим
              <br />
              Telegram-ботом?
            </h2>
            <Parallax
              onProgressChange={(progress) => setProgress(progress)}
              className="parallax-container"
            >
              <div className="usage-block__content">
                <div className="usage-block__steps-container">
                  {renderSteps()}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="steps__text"
                  >
                    {steps[step]}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -150 }}
                  transition={{ duration: 0.5 }}
                  className="usage-block__gif-container"
                >
                  <motion.div className="usage-block__gif">
                    <img className="gif" src={items[step]?.gif} alt="GIF" />
                  </motion.div>
                </motion.div>
                <div className="usage-block__steps-mobile">
                  {items.map(
                    (_, i) =>
                      i > step && (
                        <span
                          key={`step_${i}`}
                          style={{ display: "block" }}
                          className={`step__point_o-${
                            100 - Math.abs(0 - step) * 25
                          }`}
                        />
                      )
                  )}
                </div>
              </div>
            </Parallax>
          </section>
        </div>
      </Element>
    </AnimatePresence>
  );
};

export default UsageBlock;
