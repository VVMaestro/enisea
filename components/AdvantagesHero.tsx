import {InfoCard} from './shared/InfoCard';
import {Hero} from './shared/Hero';
import React from 'react';
import {l10n} from '../utils/l10n';
import {Languages} from '../types/PropTypes';

interface IProps {
  lang: Languages;
}

export function AdvantagesHero({lang}: IProps) {
  return (
    <Hero id={'advantages'} variant={'column'}>
      <h2 className='text-5xl font-bold text-center mb-10'>{`${l10n('Advantages', lang)}`}</h2>
      <div className='text-4xl text-center mb-10'>
        Мы собрали лучшие мировые практики, и даем только то, на что пошли бы сами
      </div>
      <ul className='list-none flex justify-center gap-4'>
        <li className='max-w-md'>
          <InfoCard title={'Комфортно'}>
            Стильный интерьер, чай и фрукты каждому гостю. Деликатные специалисты.
          </InfoCard>
        </li>
        <li className='max-w-md'>
          <InfoCard title={'Надёжно'}>
            Придерживаемся принципов доказательной медицины. Никакой магии и открытия чакр.
          </InfoCard>
        </li>
        <li className='max-w-md'>
          <InfoCard title={'Разумно'}>
            Первый сеанс - с большой скидкой. Выгодные предложения для постоянных гостей.
          </InfoCard>
        </li>
        <li className='max-w-md'>
          <InfoCard title={'Удобно'}>
            Находимся в 30 секундах от метро, работаем с 10 утра до 22 вечера. Есть парковка.
          </InfoCard>
        </li>
      </ul>
    </Hero>
  );
}
