import React from "react";
import offer_1 from "@assets/images/offers/convient.svg";
import offer_2 from "@assets/images/offers/personal.svg";
import offer_3 from "@assets/images/offers/tech.svg";
import offer_4 from "@assets/images/offers/additional.svg";
import "@styles/offer-block.css";
import { motion } from "framer-motion";

const items = [
  {
    img: offer_1,
    title: "Удобное\nВзаимодействие",
    text: "Всё взаимодействие с нами происходит через интуитивно понятного Telegram-бота. Оперативные ответы, управление заказами, мгновенные уведомления — всё в одном приложении.\nБыстро, удобно и эффективно!",
  },
  {
    img: offer_2,
    title: "Персональный \nПодход",
    text: "Мы понимаем, что каждый бизнес уникален. Поэтому предлагаем высокое качество обслуживания, постоянную поддержку и индивидуальный подход, который идеально соответствует вашим целям и аудитории",
  },
  {
    img: offer_3,
    title: "Технологический\nрост",
    text: "Освободите время для важных решений — мы возьмём на себя всё остальное. Автоматизируем рутину и вдохнём жизнь в ваши идеи с помощью искусственного интеллекта, а дизайн станет настоящим магнитом для клиентов.",
  },
  {
    img: offer_4,
    title: "Дополнительные\nИнструменты",
    text: "Помимо основных тарифов, мы предлагаем ряд дополнительных услуг, которые помогут сделать ваш контент по-настоящему уникальным и привлекательным: от создания обложек и сценариев до автоматизации ваших задач",
  },
];

const OfferBlock: React.FC = () => {
  return (
    <div className="offer-block-container">
      <section className="offer-block">
        <div className="star-1" />
        <div className="star-2" />
        <h2 className="offer-block__title">
          Что мы <br className="offer-block__title-sm" /> предлагаем?
        </h2>
        <div className="offer-block__content">
          {items.map((item, i) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i % 2 ? 0 : 0.25 }}
              key={item.title}
              className="offer-item"
            >
              <img src={item.img} alt={item.title} />
              <h3 className="offer-item__title">{item.title}</h3>
              <p className="offer-item__text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfferBlock;
