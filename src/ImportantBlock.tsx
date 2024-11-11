import React from 'react';
import './styles/important-block.css';
import exclamation from './img/exclamation.png';
import exclamation_big from './img/exclamation-big.png';

const ImportantBlock: React.FC = () => {
  return (
    <div className='important-block-container'>
      <section className='important-block'>
        <div className='important-block__content'>
          <h2 className='important-block__title'>Важно!</h2>
          <ul className='important-block__list'>
            <li className='important-block__list-item'><span>Не занимаемся подбором сотрудников для оффлайн-съемок и съемочного процесса</span></li>
            <li className='important-block__list-item'><span>Не используем накрутку или другие "серые" методы продвижения</span></li>
            <li className='important-block__list-item'><span>Не организовываем съемки</span></li>
            <li className='important-block__list-item'><span>Не работаем оффлайн</span></li>
            <li className='important-block__list-item'><span>Не продюсируем съемки</span></li>
            <li className='important-block__list-item'><span>Не выезжаем на съемки</span></li>
          </ul>
          <div className='important-block__footer'>
            <p className='important-block__text'>Мы не просто продвигаем, мы превращаем ваш канал в магнит для аудитории.</p>
            <p className='important-block__text'>Это делает нас не только агентством, но и вашим надежным партнером в мире YouTube!</p>
          </div>
        </div>
      </section>
      <img className='exclamation' src={exclamation} alt='Exclamation mark' />
      <img className='exclamation-big' src={exclamation_big} alt='Exclamation Big mark' />
    </div>
  );
};

export default ImportantBlock;