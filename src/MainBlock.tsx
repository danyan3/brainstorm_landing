import React from 'react';
import './styles/main-block.css'
import rocket from './img/rocket.png';
import vector from './img/vector.svg';
import silver_youtube_button from './img/silver-youtube-button.png';
import gold_youtube_button from './img/gold-youtube-button.png';

const MainBlock: React.FC = () => {
  return (
    <div className='main-block-container'>
      <section className='main-block'>
        <hgroup className='title-group'>
          <h2 className='title-group__pretitle'>Сделайте свой канал звёздным!</h2>
          <h1 className='title-group__title'>BRAINSTORM<br />PRODUCTION</h1>
        </hgroup>
        <p className='main-block__content'>
          Наше агентство использует самые современные методы и приемы продвижения на YouTube, чтобы ваш канал не просто замечали, но и запоминали. Мы работаем с каналами любой тематики и масштаба и помогаем им достичь новых высот.
        </p>
        <button className='main-block__button_start'>ПОЕХАЛИ!</button>
      </section>
      <div className='main-visual'>
        <div className='rocket-container'>
          <div className='ellipse-1' />
          <div className='ellipse-2' />
          <div className='ellipse-3' />
          <img className='img-vector' src={vector} alt='Vector' />
          <img className='img-rocket' src={rocket} alt='Rocket' />
          <img src={silver_youtube_button} alt='Silver YouTube button' className='silver-youtube-button' />
        </div>
        <img src={gold_youtube_button} alt='Gold YouTube button' className='gold-youtube-button' />
        <div className='star-1' />
        <div className='star-2' />
      </div>
    </div>
  );
};

export default MainBlock;