import {InfoCard} from './shared/InfoCard';
import {Hero} from './shared/Hero';
import React from 'react';
import {l10n} from '../utils/l10n';
import {Languages} from '../types/PropTypes';
import {ServerText} from './shared/ServerText';
import {DATA_KEY, PHOTO_TAG} from '../consts';
import {IAdvantage, IAdvantageData} from '../types/IAdvantage';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {Paragraph} from './shared/Paragraph';
import {IMedia} from './shared/MediaList';

interface IProps {
  lang: Languages;
}

export async function AdvantagesHero({lang}: IProps) {
  const [
    advantagesResponse,
    advantagesPhotoResponse
  ] = await Promise.all([
    new ServerSideFetcher().get<{advantages: IAdvantageData[] }>('/api/advantage'),
    new ServerSideFetcher().get<{ medias: IMedia[] }>(`/api/media/?tag=${PHOTO_TAG.ADVANTAGES_PHOTO}`)
  ]);

  const advantagesPhotoUrl = advantagesPhotoResponse?.medias?.[0] ?
    advantagesPhotoResponse?.medias?.[0].secureUrl :
    '';

  return (
    <Hero
      overlay={true}
      style={{backgroundImage: `url(${advantagesPhotoUrl})`}}
      id={'advantages'}
      variant={'column'}
    >
      <h2 className='text-3xl lg:text-5xl font-bold text-center mb-10'>{`${l10n('Advantages', lang)}`}</h2>

      <Paragraph>
        <ServerText tag={DATA_KEY.ADVANTAGES} lang={lang} />
      </Paragraph>

      <ul className='list-none flex justify-center gap-10 flex-col lg:flex-row lg:gap-4'>
        {
          (advantagesResponse?.advantages ?? [])
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
