import {InfoCard} from './shared/InfoCard';
import {Hero} from './shared/Hero';
import React from 'react';
import {l10n} from '../utils/l10n';
import {Languages} from '../types/PropTypes';
import {ServerText} from './shared/ServerText';
import {DATA_KEY} from '../consts';
import {IAdvantage, IAdvantageData} from '../types/IAdvantage';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';

interface IProps {
  lang: Languages;
}

export async function AdvantagesHero({lang}: IProps) {
  const response = await new ServerSideFetcher().get<{advantages: IAdvantageData[] }>('/api/advantage');

  return (
    <Hero id={'advantages'} variant={'column'}>
      <h2 className='text-5xl font-bold text-center mb-10'>{`${l10n('Advantages', lang)}`}</h2>

      <div className='text-4xl text-center mb-20'>
        <ServerText tag={DATA_KEY.ADVANTAGES} lang={lang} />
      </div>

      <ul className='list-none flex justify-center gap-4'>
        {
          (response?.advantages ?? [])
            .sort(({index: index1}, {index: index2}) => index1 - index2)
            .map((advantageData, key) => (
              <li key={key}>
                <InfoCard title={advantageData[lang].title}>
                  {advantageData[lang].desc}
                </InfoCard>
              </li>
            ))
        }
      </ul>
    </Hero>
  );
}
