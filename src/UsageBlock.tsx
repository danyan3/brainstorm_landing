import React, { useState } from 'react';
import './styles/usage-block.css';
import zhopa from './img/ZHOPA.gif';

const UsageBlock: React.FC = () => {
  const [step, setStep] = useState(3);

  const steps: JSX.Element[] = [
    <>Найдите нашего ботика в поиске и нажмите <span className='steps__text_gradient'>кнопку «Старт».</span></>,
    <>Перемещайтесь между разделами, используя <span className='steps__text_gradient'>удобные кнопки</span></>,
    <>Выберите <span className='steps__text_gradient'>нужную услугу</span> и следуйте инструкциям бота, заполнив нужные поля. После подтверждения заказа<br />бот <span className='steps__text_gradient'>пришлёт уведомление</span> для оплаты</>,
    <>Для большинства тарифов нужно <span className='steps__text_gradient'>подписать договор</span> на оказание услуг.  После подписания отправьте его нашему боту.</>,
  ];

  const renderSteps = () => {
    return (
      <div className='usage-block__steps'>
        <div className={`usage-block__step usage-block__step_${step === 0 ? 'selected' : '0'}`}>
          {
            step === 0
              ? <span className='step__number-text'>01</span>
              : <span className={`step__point_o-${100 - Math.abs(0 - step) * 25}`} />
          }
        </div>
        <div className={`usage-block__step usage-block__step_${step === 1 ? 'selected' : '1'}`}>
        {
            step === 1
              ? <span className='step__number-text'>02</span>
              : <span className={`step__point_o-${100 - Math.abs(1 - step) * 25}`} />
          }
        </div>
        <div className={`usage-block__step usage-block__step_${step === 2 ? 'selected' : '2'}`}>
        {
            step === 2
              ? <span className='step__number-text'>03</span>
              : <span className={`step__point_o-${100 - Math.abs(2 - step) * 25}`} />
          }
        </div>
        <div className={`usage-block__step usage-block__step_${step === 3 ? 'selected' : '3'}`}>
        {
            step === 3
              ? <span className='step__number-text'>04</span>
              : <span className={`step__point_o-${100 - Math.abs(3 - step) * 25}`} />
          }
        </div>
      </div>
    );
  }

  return (
    <div className='usage-block-container'>
      <section className='usage-block'>
        <h2 className='usage-block__title'>Как пользоваться нашим<br />Telegram-ботом?</h2>
        <div className='usage-block__content'>
          <div className='usage-block__steps-container'>
            {renderSteps()}
            <p className='steps__text'>{steps[step]}</p>
          </div>
          <div className='usage-block__gif-container'>
            <div className='usage-block__gif'>
              <img className='gif' src={zhopa} alt='GIF' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsageBlock;