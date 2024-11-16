import React, { useEffect } from "react";
import "@styles/main-block.css";
import rocket from "@assets/images/rocket.png";
import vector from "@assets/images/vector.svg";
import vectorSm from "@assets/images/vector-sm.svg";
import silver_youtube_button from "@assets/images/silver-youtube-button.png";
import gold_youtube_button from "@assets/images/gold-youtube-button.png";
import { animate, inView, motion } from "framer-motion";
import { LetsStartModal } from "./LetsStartModal";

const MainBlock: React.FC = () => {
  useEffect(() => {
    [
      ".title-group__pretitle",
      ".title-group__title",
      ".main-block__content",
      ".button",
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
    <div className="main-block-container">
      <i className="main-block__spark-1" />
      <i className="main-block__spark-2" />
      <i className="main-block__spark-3" />
      <i className="main-block__spark-4" />
      <div className="main-block-bg" />
      <motion.div className="main-block">
        <hgroup className="title-group">
          <h2 className="title-group__pretitle">
            Сделайте свой бизнес звёздным!
          </h2>
          <h1 className="title-group__title">
            BRAINSTORM
            <br />
            PRODUCTION
          </h1>
        </hgroup>
        <p className="main-block__content">
          Мы превращаем творчество в искусство, а технологии — в ваши
          конкурентные преимущества. Наша команда создаст для вас уникальный
          контент и цифровые решения, которые подчеркнут индивидуальность бренда
          и усилят его присутствие в интернете. С нами ваши идеи выходят за
          рамки возможного!
        </p>
        <LetsStartModal>
          <button className="button">ПОЕХАЛИ!</button>
        </LetsStartModal>

        <div className="star-4" />
        <motion.img
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
          }}
          whileInView={{
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 2 }}
          src={silver_youtube_button}
          alt="Silver YouTube button"
          className="silver-youtube-button-sm"
        />
      </motion.div>
      <div className="main-visual">
        <div className="rocket-container">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="ellipse-1"
          />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            className="ellipse-2"
          />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.1 }}
            className="ellipse-3"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200, x: 200 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 2 }}
            className="img-vector"
            src={vector}
            alt="Vector"
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200, x: 135 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 2 }}
            className="img-vector img-vector--sm"
            src={vectorSm}
            alt="Vector"
          />
          <div className="img-rocket">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200, x: 200 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                initial={{ y: 0, x: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: [0, -20, 0], x: [0, -3, 0, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={rocket}
                alt="Rocket"
              />
            </motion.div>
          </div>

          <motion.img
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
            }}
            whileInView={{
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            transition={{ duration: 2 }}
            src={silver_youtube_button}
            alt="Silver YouTube button"
            className="silver-youtube-button"
          />
        </div>
        <motion.img
          viewport={{ once: true }}
          initial={{ y: 0, x: 0 }}
          whileInView={{ y: [0, -10, 0], x: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          src={gold_youtube_button}
          alt="Gold YouTube button"
          className="gold-youtube-button"
        />
        <div className="star-1" />
        <div className="star-2" />
        <div className="star-3" />
      </div>
    </div>
  );
};

export default MainBlock;
