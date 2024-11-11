import './styles/header.css';
import telegram_logo from './img/telegram.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className='logo'>
        <h3>BRAINSTORM</h3>
      </div>
      <nav>
        <ul className='nav-list'>
          <li className='nav-list__item'>Кому подходит</li>
          <li className='nav-list__item'>Тарифы и услуги</li>
          <li className='nav-list__item'>Как пользоваться</li>
        </ul>
      </nav>
      <div className='btn-group'>
        <button className='btn-group__button btn-group__button_tg'>
          <img src={telegram_logo} alt='Telegram logo' />
        </button>
        <button className='btn-group__button btn-group__button_start'>НАЧАТЬ</button>
      </div>
    </header>
  );
};

export default Header;