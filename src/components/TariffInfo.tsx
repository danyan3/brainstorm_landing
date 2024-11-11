import React from 'react';
import { TariffType } from '../types';
import tariffs from '../data/tariffs.json';
import getIcon from '../utils/getIcon';

interface TariffInfoProps {
  tariff: TariffType;
}

const TariffInfo: React.FC<TariffInfoProps> = ({ tariff }) => {
  const renderPriceDetails = () => {
    if (tariffs[tariff].price_detail.length !== 0) {
      return (
        <ul className='price__details'>
          {tariffs[tariff].price_detail.map((item, index) => {
            return (
              <li key={index} className={tariffs[tariff].price_detail.length === 1 ? 'price__details-item' : 'price__details-item_point'}>{item}</li>
            );
          })}
        </ul>
      );
    }
    return <></>;
  };

  const renderPriceList = () => {
    return (
      <ul className='price__list'>
        {tariffs[tariff].price.map((item, index) => {
          return (
            <li key={index} className={`${tariffs[tariff].price.length === 1 ? 'price__list-item' : 'price__list-item_point'}`}>
              {item.name ? <span className={`${item.name === 'Premium' ? 'price__text_gradient' : 'price__text_name'}`}>{item.name}</span> : <></>}
              {!item.strict ? <span className='price__text_ordinary'>от</span> : <></>}
              <span className='price__text_value'>{item.value}</span>
              <span className='price__text_currency'>₽</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderOffer = () => {
    return (
      <section className='tariff-info__offer'>
        <div className='offer__title-container'>
          <h4 className='offer__title'>Что мы сделаем?</h4>
          <div className='break' />
        </div>
        <ul className='offer__list'>
          {tariffs[tariff].offer.map((item, index) => {
            return (
              <li key={index} className='offer__list-item'>{item}</li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderAdvantages = () => {
    if (tariff === 'youtube-pro-plus') return <></>;
    return (
      <section className='tariff-info__advantages'>
        <div className='advantages__title-container'>
          <h4 className='advantages__title'>Преимущества</h4>
          <div className='break' />
        </div>
        <ul className='advantages__list'>
          {tariffs[tariff].advantages.map((item, index) => {
            return (
              <li key={index} className='advantages__list-item'>{item}</li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderDeadlines = () => {
    if (tariff === 'youtube-pro-plus') return <></>;
    return (
      <section className='tariff-info__deadlines'>
        <div className='deadlines__title-container'>
          <h4 className='deadlines__title'>Сроки</h4>
          <div className='break' />
        </div>
        <ul className='deadlines__list'>
          {tariffs[tariff].deadlines.map((item, index) => {
            return (
              <li key={index} className='deadlines__list-item'>{item}</li>
            );
          })}
        </ul>
      </section>
    );
  };

  return (
    <section className='tariff-info'>
      <div className='tariff-info__header'>
        <div className='tariff-info__title-container'>
          <h3 className='tariff-info__title'>{tariffs[tariff].name}</h3>
          <p className='tariff-info__description'>{tariffs[tariff].description}</p>
        </div>
        <div className='icon-container'>
          <img className='tariff-info__header_icon' src={getIcon(tariff)} alt='Icon' />
        </div>
      </div>
      <div className='tariff-info__main'>
        {renderOffer()}
        {renderAdvantages()}
        {renderDeadlines()}
        <section className='tariff-info__price'>
          <div className='price__title-container'>
            <h4 className='price__title'>Цена</h4>
            <div className='break' />
          </div>
          <div className='price__content-container'>
            <div className='price__content'>
              {renderPriceList()}
              {renderPriceDetails()}
            </div>
            <button className='button_purchase'>ПРИОБРЕСТИ</button>
          </div>
        </section>
      </div>
      {/* <div className='service-info__footer'>
        
      </div> */}
    </section>
  );
};

export default TariffInfo;