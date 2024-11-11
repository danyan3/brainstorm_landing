import React, { useState } from 'react';
import './styles/whom-block.css';
import graph from './img/graph.png';
import brilliant_youtube_button from './img/brilliant-youtube-button.png';
import { Parallax } from 'react-scroll-parallax';

const WhomBlock: React.FC = () => {
  const [progress, setProgress] = useState<number>();
  const [enter, setEntered] = useState(false);

  return (
    <div className='whom-block-container'>
      <section className='whom-block'>
        <h2 className='whom-block__title'>Для кого наши услуги?</h2>
        <div className='whom-block__content'>
          <section className='whom-item whom-item-1'>
            <h4 className='whom-item__title'>Амбициозные новички</h4>
            <p className='whom-item__text'>
              Стартуйте на YouTube под нашим надёжным руководством и быстро достигайте первых значимых результатов
            </p>
            <div className='graph-point'>
              <div className='graph-point__ellipse-1' />
              <div className='graph-point__ellipse-2' />
              <div className='graph-point__ellipse-3' />
            </div>
          </section>
          <section className='whom-item whom-item-2'>
            <h4 className='whom-item__title'>Опытные контент-мейкеры</h4>
            <p className='whom-item__text'>
              Расширяем вашу аудиторию и повышаем вовлечённость, приводя ваш канал к новым вершинам
            </p>
            <div className='graph-point'>
              <div className='graph-point__ellipse-1' />
              <div className='graph-point__ellipse-2' />
              <div className='graph-point__ellipse-3' />
            </div>
          </section>
          <section className='whom-item whom-item-3'>
            <h4 className='whom-item__title'>Инфлюенсеры и публичные персоны</h4>
            <p className='whom-item__text'>
              Автоматизируем процессы управления вашим каналом, повышая влияние и упрощая взаимодействие с аудиторией
            </p>
            <div className='graph-point'>
              <div className='graph-point__ellipse-1' />
              <div className='graph-point__ellipse-2' />
              <div className='graph-point__ellipse-3' />
            </div>
          </section>
          <section className='whom-item whom-item-4'>
            <h4 className='whom-item__title'>Творческие коллективы и студии</h4>
            <p className='whom-item__text'>
              Даем вашему проекту мощный импульс и помогаем донести ваше творчество до широкой публики, выделяясь среди конкурентов
            </p>
            <div className='graph-point'>
              <div className='graph-point__ellipse-1' />
              <div className='graph-point__ellipse-2' />
              <div className='graph-point__ellipse-3' />
            </div>
          </section>
          <section className='whom-item whom-item-5'>
            <h4 className='whom-item__title'>Бизнесы всех размеров</h4>
            <p className='whom-item__text'>
              Превращаем ваш канал в мощный инструмент брендинга и привлечения клиентов, усиливая ваше влияние на рынке
            </p>
            <div className='graph-point'>
              <div className='graph-point__ellipse-1' />
              <div className='graph-point__ellipse-2' />
              <div className='graph-point__ellipse-3' />
            </div>
          </section>
        </div>
      </section>
      <img src={brilliant_youtube_button} alt='Brilliant YouTube Button' className='brilliant-youtube-button' />
      <img src={graph} alt='Graph' className='graph' />
      <div className='star-1' />
    </div>
  );
};

export default WhomBlock;