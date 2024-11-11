import React from 'react';
import cloud from './img/cloud.png';
import offer_1 from './img/offer-1.png';
import offer_2 from './img/offer-2.png';
import offer_3 from './img/offer-3.png';
import offer_4 from './img/offer-4.png';
import './styles/offer-block.css';

const OfferBlock: React.FC = () => {
  return (
    <div className='offer-block-container'>
      <section className='offer-block'>
        <h2 className='offer-block__title'>Что мы предлагаем?</h2>
        <div className='offer-block__content'>
          <section className='offer-item-1'>
            <img src={offer_1} alt='' />
            <h3 className='offer-item-1__title'>Удобное<br />Взаимодействие</h3>
            <p className='offer-item-1__text'>
              Всё взаимодействие с нами происходит через интуитивно понятного Telegram-бота. Оперативные ответы, управление заказами, мгновенные уведомления — всё в одном приложении. Быстро, удобно и эффективно!
            </p>
          </section>
          <section className='offer-item-2'>
            <img src={offer_2} alt='' />
            <h3 className='offer-item-2__title'>Персональный<br />Подход</h3>
            <p className='offer-item-2__text'>
              Мы понимаем, что каждый канал уникален. Поэтому предлагаем высокое качество обслуживания, постоянную поддержку и индивидуальный подход, который идеально соответствует вашим целям и аудитории.
            </p>
          </section>
          <section className='offer-item-3'>
            <img src={offer_3} alt='' />
            <h3 className='offer-item-3__title'>Экспертное<br />Продвижение</h3>
            <p className='offer-item-3__text'>
              Основываясь на трендах и проверенных методиках, наша команда работает над тем, чтобы ваш контент увидели миллионы. Стратегическое продвижение и тщательно продуманный контент-план — залог вашего успеха!
            </p>
          </section>
          <section className='offer-item-4'>
            <img src={offer_4} alt='' />
            <h3 className='offer-item-4__title'>Дополнительные<br />Инструменты</h3>
            <p className='offer-item-4__text'>
              Помимо основных тарифов, мы предлагаем ряд дополнительных услуг, которые помогут сделать ваш контент по-настоящему уникальным и привлекательным: от создания обложек и сценариев до автоматизации ваших задач.
            </p>
          </section>
        </div>
      </section>
      <img src={cloud} alt='Cloud' className='cloud' />
    </div>
  );
};

export default OfferBlock;