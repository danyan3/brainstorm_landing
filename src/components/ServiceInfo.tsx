import React from 'react';
import { ServiceType } from '../types';
import getIcon from '../utils/getIcon';
import services from '../data/services.json';

interface ServiceInfoProps {
  service: ServiceType;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => {

  const renderPriceDetails = () => {
    if (services[service].price_detail.length !== 0) {
      return (
        <ul className='price__details'>
          {
            services[service].price_detail.map((item, index) => {
              return (
                <li key={index} className='price__details-item'>{item}</li>
              );
            })
          }
        </ul>
      );
    }
    return <></>;
  };

  const renderPriceList = () => {
    return (
      <ul className='price__list'>
        {services[service].price.map((item, index) => {
          return (
            <li key={index} className={`${services[service].price.length === 1 ? 'price__list-item' : 'price__list-item_point'}`}>
              {item.name ? <span className={`${item.name === 'Premium' ? 'price__text_gradient' : 'price__text_name'}`}>{item.name}</span> : <></>}
              {!item.strict ? <span className='price__text_ordinary'>от</span> : <></>}
              <span className='price__text_value'>{item.value}</span>
              {service !== 'technical-solutions' ? <span className='price__text_currency'>₽</span> : <></>}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className='service-info'>
      <div className='service-info__header'>
        <h3 className='service-info__title'>{services[service].name}</h3>
        <div className='icon-container'>
          <img className='service-info__header_icon' src={getIcon(service)} alt='Icon' />
        </div>
      </div>
      <div className='service-info__main'>
        <p className='service-info__description'>
          {services[service].description}
        </p>
        <section className='service-info__price'>
          <div className='price__title-container'>
            <h4 className='price__title'>Цена</h4>
            <div className='break' />
          </div>
          <div className="price__content-container">
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
    </section >
  );
};

export default ServiceInfo;