import "@styles/header.css";
import telegram_logo from "@assets/images/telegram.svg";
import { useState } from "react";
import { CloseIcon } from "@/components/ui/icons/CloseIcon";
import { MenuIcon } from "@/components/ui/icons/MenuIcon";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LetsStartModal } from "./LetsStartModal";
import { TELEGRAM_LINK } from "@/utils/consts";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
    >
      <button
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        className="logo"
      >
        <h3>BRAINSTORM</h3>
      </button>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link
              onClick={handleMenuToggle}
              to="whom"
              href="#whom"
              spy={true}
              smooth={true}
              offset={window.innerWidth < 640 ? 0 : -150}
              duration={500}
            >
              Кому подходит<span className="nav-list__item-lg">?</span>
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              onClick={handleMenuToggle}
              to="services"
              href="#services"
              spy={true}
              smooth={true}
              offset={window.innerWidth < 640 ? 0 : -150}
              duration={500}
            >
              Тарифы и услуги
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              onClick={handleMenuToggle}
              to="how-to-use"
              href="#how-to-use"
              spy={true}
              smooth={true}
              offset={window.innerWidth < 640 ? 50 : -150}
              duration={500}
            >
              Как пользоваться<span className="nav-list__item-lg">?</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="btn-group">
        <a
          href={TELEGRAM_LINK}
          target="_blanck"
          className="btn-group__button btn-group__button_tg"
        >
          <img src={telegram_logo} alt="Telegram logo" />
        </a>
        <LetsStartModal>
          <button className="button btn-group__button_start">НАЧАТЬ</button>
        </LetsStartModal>

        <button onClick={handleMenuToggle} className="btn-group__button-menu">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
