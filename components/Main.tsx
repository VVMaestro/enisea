import React from 'react';
import {Button} from './shared/Button/Button';
import {Hero} from './shared/Hero';
import {Divider} from './shared/Divider';
import {InfoCard} from './shared/InfoCard';
import {StaffHero} from './StaffHero';
import {SpecialOffer} from './SpecialOffer';
import {Languages} from '../types/PropTypes';

export function Main({lang}: {lang: Languages}) {
  return (
    <main className={'bg-base-200'}>
      <SpecialOffer lang={lang} />
      <Divider />
      <StaffHero lang={lang} />
      <Divider />
      <Hero id={'advantages'} variant={'column'}>
        <h2 className='text-5xl font-bold text-center mb-10'>Преимущества</h2>
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
      <Divider />
      <Hero variant={'column'} id={'services'}>
        <h2 className='text-5xl font-bold text-center mb-10'>Услуги</h2>
        <ul className='list-inside list-none flex flex-wrap max-w-2xl justify-center gap-8'>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill={'rgb(51 65 85 / var(--tw-bg-opacity))'} />
            </svg>
            <div className='text-center'>
              Первая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill={'rgb(51 65 85 / var(--tw-bg-opacity))'} />
            </svg>
            <div className='text-center'>
              Вторая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Третье услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Четвёртая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Пятая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Шестая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Седьмая услуга
            </div>
          </li>
          <li className='flex flex-col justify-center w-32 transition cursor-pointer hover:scale-90'>
            <svg viewBox='0 0 100 100' className='mb-5'>
              <circle cx='50' cy='50' r='40' fill='rgb(51 65 85 / var(--tw-bg-opacity))' />
            </svg>
            <div className='text-center'>
              Восьмая услуга
            </div>
          </li>
        </ul>
      </Hero>
    </main>
  );
}
