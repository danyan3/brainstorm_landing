import React, { useState } from 'react';
import ServiceProducts from './components/ServiceProducts';
import TariffProducts from './components/TariffProducts';
import './styles/solution-block.css';
import { ServiceType, TariffType } from './types';
import ServiceInfo from './components/ServiceInfo';
import TariffInfo from './components/TariffInfo';

type SwitchButtonType = 'tariffs' | 'services';

const SolutionBlock: React.FC = () => {
  const [switchProduct, setSwitchButton] = useState<SwitchButtonType>('tariffs');
  const [service, setService] = useState<ServiceType>('preview');
  const [tariff, setTariff] = useState<TariffType>('consultation');

  const handleSwitchButtonClick = () => {
    setSwitchButton((prevState) => {
      switch (prevState) {
        case 'tariffs': return 'services';
        case 'services': return 'tariffs';
      }
    });
  };

  const renderProductInfo = () => {
    switch (switchProduct) {
      case 'services': return <ServiceInfo service={service} />
      case 'tariffs': return <TariffInfo tariff={tariff} />
    }
  };

  const renderProducts = () => {
    switch (switchProduct) {
      case 'services':
        return <ServiceProducts
          service={service}
          setService={setService}
        />
      case 'tariffs':
        return <TariffProducts
          tariff={tariff}
          setTariff={setTariff}
        />;
    }
  };

  return (
    <div className='solution-block-container'>
      <section className='solution-block'>
        <h2 className='solution-block__title'>Персональные решения для вас</h2>
        <div className={`switch switch_${switchProduct}`}>
          <button
            disabled={switchProduct === 'tariffs'}
            onClick={handleSwitchButtonClick}
            className='switch__button switch__button_tariffs'
          >
            Тарифы
          </button>
          <button
            disabled={switchProduct === 'services'}
            onClick={handleSwitchButtonClick}
            className='switch__button switch__button_services'
          >
            Услуги
          </button>
        </div>
        <div className={`solution-block__content solution-block__content_${switchProduct}`}>
          {renderProductInfo()}
          {renderProducts()}
        </div>
      </section>
    </div>
  );
};

export default SolutionBlock;