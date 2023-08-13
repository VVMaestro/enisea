import React from 'react';
import Image from 'next/image';
import {Button} from './shared/Button/Button';
import {Hero} from './shared/Hero';
import {Divider} from './shared/Divider';
import {InfoCard} from './shared/InfoCard';
import {CloudService} from '../utils/CloudService/CloudService';

export function Main() {
  const mediaConstructor = new CloudService();

  return (
    <main className={'bg-base-200'}>
      <Hero className={'hero-image'} overlay={true}>
          <div className={'max-w-md'}>
            <h2 className={'mb-5 text-5xl font-bold'}>Hello there</h2>
            <p className={'mb-5'}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Button styleType={'accent'} view={'filled'} normalCase={false}>Записаться</Button>
          </div>
      </Hero>
      <Divider />
      <Hero id={'who'} variant={'column'}>
        <h2 className={'text-5xl font-bold py-6'}>Кто мы?</h2>
        <div className={'flex flex-row gap-2'}>
          <Image
            key={1}
            src={mediaConstructor.receiveMediaLink('samples/people/smiling-man')}
            width={300}
            height={0}
            className={'max-w-sm rounded-lg shadow-2xl'}
            alt={'Cool image'}
          />
          <Image
            key={2}
            src={mediaConstructor.receiveMediaLink('samples/people/kitchen-bar')}
            width={300}
            height={0}
            className={'max-w-sm rounded-lg shadow-2xl'}
            alt={'Cool image'}
          />
        </div>
        <div>
          <p className={'py-6'}>Мы собрали команду сертифицированных и опытных мастеров, разработали эффективные программы, проверенные на себе, обернули это в первоклассный сервис и теперь хотим размять всю страну.
            Наша главная цель - сделать массаж неотъемлемой частью жизни современного человека.</p>
        </div>
      </Hero>
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
