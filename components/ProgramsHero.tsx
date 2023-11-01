import {Hero} from './shared/Hero';
import React, {ComponentPropsWithRef} from 'react';
import Image from 'next/image';
import {ProgramItem} from './ProgramItem';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {IProgramData} from '../types/IProgram';
import {Languages} from '../types/PropTypes';

interface IProps extends ComponentPropsWithRef<'ul'> {
  lang: Languages;
}

export const ProgramsHero = async ({lang}: IProps) => {
  const response = await new ServerSideFetcher().get<{programs: IProgramData[]}>('/api/program');

  return (
    <Hero variant={'column'} id={'services'}>
      <h2 className='text-5xl font-bold text-center mb-10'>Услуги</h2>
      <ul className='list-none flex flex-wrap max-w-5xl justify-center items-start gap-8'>
        {
          (response?.programs ?? [])
            .sort(({index: index1}, {index: index2}) => index1 - index2)
            .map(({iconURL, index, ...data}) => (
              <li key={index}>
                <ProgramItem
                  imgSrc={iconURL}
                  title={data[lang].title}
                  desc={data[lang].desc}
                />
              </li>
            ))
        }
      </ul>
    </Hero>
  );
};
