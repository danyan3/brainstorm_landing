import React from 'react';
import './styles/footer.css';
import telegram_logo from './img/telegram.svg';
import rocket from './img/rocket.png';
import vector from './img/vector-2.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer'>
          <span className='footer__rights'>Все права защищены.</span>
          <div className='footer__contacts'>
            <span className='contact_email'>brainstorm_prod@gmail.com</span>
            <button className='contact__button_tg'>
              <img src={telegram_logo} alt='Telegram logo' />
            </button>
          </div>
        </div>
        <img className='img-rocket' src={rocket} alt='Rocket' />
        <img className='img-vector' src={vector} alt='Vector' />
      </div>
    </footer>
  );
}

export default Footer;