import React, { useState } from 'react';
import ProductButton from './ProductButton';
import { TariffType } from '../types';
import getIcon from '../utils/getIcon';

interface TariffProductsProps {
  tariff: TariffType;
  setTariff: React.Dispatch<React.SetStateAction<TariffType>>;
}

const TariffProducts: React.FC<TariffProductsProps> = ({ tariff, setTariff }) => {
  const [tariffButton, setTariffButton] = useState<TariffType>(tariff);

  const handleTariffButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const tariff = event.currentTarget.value as TariffType;
    setTariffButton(tariff);
    setTariff(tariff);
  };

  return (
    <div className='products'>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='consultation'
            icon={getIcon('consultation')}
            selected_icon={getIcon('consultation', true)}
            text='Онлайн-консультация'
            selected={tariffButton === 'consultation'}
            onClick={handleTariffButtonClick}
          />
          <ProductButton
            type='starter'
            icon={getIcon('starter')}
            selected_icon={getIcon('starter', true)}
            text='Starter Pack'
            selected={tariffButton === 'starter'}
            onClick={handleTariffButtonClick}
          />
        </div>
        <div className='products-group__row'>
          <ProductButton
            type='beginners'
            icon={getIcon('beginners')}
            selected_icon={getIcon('beginners', true)}
            text='Beginners Pack'
            selected={tariffButton === 'beginners'}
            onClick={handleTariffButtonClick}
          />
          <ProductButton
            type='basic'
            icon={getIcon('basic')}
            selected_icon={getIcon('basic', true)}
            text='Basic Pack'
            selected={tariffButton === 'basic'}
            onClick={handleTariffButtonClick}
          />
        </div>
      </div>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='youtube-pro'
            icon={getIcon('youtube-pro')}
            selected_icon={getIcon('youtube-pro', true)}
            text='YouTube Pro Pack'
            selected={tariffButton === 'youtube-pro'}
            onClick={handleTariffButtonClick}
          />
          <ProductButton
            type='youtube-pro-plus'
            icon={getIcon('youtube-pro-plus')}
            selected_icon={getIcon('youtube-pro-plus', true)}
            text='YouTube Pro+ Pack'
            selected={tariffButton === 'youtube-pro-plus'}
            onClick={handleTariffButtonClick}
          />
        </div>
      </div>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='shorts'
            icon={getIcon('shorts')}
            selected_icon={getIcon('shorts', true)}
            text='Shorts Pack'
            selected={tariffButton === 'shorts'}
            onClick={handleTariffButtonClick}
          />
          <ProductButton
            type='shorts-pro'
            icon={getIcon('shorts-pro')}
            selected_icon={getIcon('shorts-pro', true)}
            text='Shorts Pro Pack'
            selected={tariffButton === 'shorts-pro'}
            onClick={handleTariffButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TariffProducts;