import React, { useState } from 'react';
import ProductButton from './ProductButton';
import { ServiceType } from '../types';
import getIcon from '../utils/getIcon';

interface ServiceProductsProps {
  service: ServiceType;
  setService: React.Dispatch<React.SetStateAction<ServiceType>>;
}

const ServiceProducts: React.FC<ServiceProductsProps> = ({ service, setService }) => {
  const [serviceButton, setServiceButton] = useState<ServiceType>(service);

  const handleServiceButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const service = event.currentTarget.value as ServiceType;
    setServiceButton(service);
    setService(service);
  };

  return (
    <div className='products'>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='preview'
            icon={getIcon('preview')}
            selected_icon={getIcon('preview', true)}
            text='Создание обложек'
            selected={serviceButton === 'preview'}
            onClick={handleServiceButtonClick}
          />
          <ProductButton
            type='montage'
            icon={getIcon('montage')}
            selected_icon={getIcon('montage', true)}
            text='Монтаж видео'
            selected={serviceButton === 'montage'}
            onClick={handleServiceButtonClick}
          />
        </div>
        <div className='products-group__row'>
          <ProductButton
            type='scenario'
            icon={getIcon('scenario')}
            selected_icon={getIcon('scenario', true)}
            text='Написание сценариев'
            selected={serviceButton === 'scenario'}
            onClick={handleServiceButtonClick}
          />
          <ProductButton
            type='subtitles'
            icon={getIcon('subtitles')}
            selected_icon={getIcon('subtitles', true)}
            text='Создание субтитров'
            selected={serviceButton === 'subtitles'}
            onClick={handleServiceButtonClick}
          />
        </div>
      </div>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='transcription'
            icon={getIcon('transcription')}
            selected_icon={getIcon('transcription', true)}
            text='Транскрибация'
            selected={serviceButton === 'transcription'}
            onClick={handleServiceButtonClick}
          />
          <ProductButton
            type='translation'
            icon={getIcon('translation')}
            selected_icon={getIcon('translation', true)}
            text='Перевод'
            selected={serviceButton === 'translation'}
            onClick={handleServiceButtonClick}
          />
        </div>
        <div className='products-group__row'>
          <ProductButton
            type='voiceover'
            icon={getIcon('voiceover')}
            selected_icon={getIcon('voiceover', true)}
            text='Озвучка'
            selected={serviceButton === 'voiceover'}
            onClick={handleServiceButtonClick}
          />
          <ProductButton
            type='slice-video'
            icon={getIcon('slice-video')}
            selected_icon={getIcon('slice-video', true)}
            text='Нарезка видео'
            selected={serviceButton === 'slice-video'}
            onClick={handleServiceButtonClick}
          />
        </div>
      </div>
      <div className='products-group'>
        <div className='products-group__row'>
          <ProductButton
            type='technical-solutions'
            icon={getIcon('technical-solutions')}
            selected_icon={getIcon('technical-solutions', true)}
            text='Решения для бизнеса'
            selected={serviceButton === 'technical-solutions'}
            onClick={handleServiceButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceProducts;