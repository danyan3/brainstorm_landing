import React from "react";
import "@styles/footer.css";
import telegram_logo from "@assets/images/telegram.svg";
import rocket from "@assets/images/rocket.png";
import vector from "@assets/images/vector-2.svg";
import ImportantBlock from "./ImportantBlock";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer>
      <ImportantBlock />
      <div className="footer-container">
        <div className="footer">
          <span className="footer__rights">Все права защищены.</span>
          <div className="footer__contacts">
            <a
              href="mailto:brainstorm_prod@gmail.com"
              className="contact_email"
            >
              brainstorm_prod@gmail.com
            </a>
            <button className="contact__button_tg">
              <img src={telegram_logo} alt="Telegram logo" />
            </button>
          </div>
        </div>

        <motion.img className="img-rocket" src={rocket} alt="Rocket" />
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="img-vector"
          src={vector}
          alt="Vector"
        />
      </div>
      <i className="footer-spark" />
      <i className="footer-spark-sm" />
    </footer>
  );
};

export default Footer;
