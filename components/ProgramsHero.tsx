import {Hero} from './shared/Hero';
import React, {ComponentPropsWithRef} from 'react';
import Image from 'next/image';
import {ProgramItem} from './ProgramItem';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {IProgramData} from '../types/IProgram';
import {Languages} from '../types/PropTypes';
import {l10n} from '../utils/l10n';
import {ServerText} from './shared/ServerText';
import {DATA_KEY} from '../consts';

interface IProps extends ComponentPropsWithRef<'ul'> {
  lang: Languages;
}

export const ProgramsHero = async ({lang}: IProps) => {
  const response = await new ServerSideFetcher().get<{programs: IProgramData[]}>('/api/program');

  return (
    <Hero variant={'column'} id={'services'}>
      <h2 className='text-5xl font-bold text-center mb-10'>{l10n('Massage programs', lang)}</h2>

      <div className='text-4xl text-center mb-20'>
        <ServerText tag={DATA_KEY.PROGRAMS} lang={lang} />
      </div>

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
