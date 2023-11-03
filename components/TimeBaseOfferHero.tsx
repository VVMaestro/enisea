import {Hero} from './shared/Hero';
import {ServerText} from './shared/ServerText';
import {DATA_KEY} from '../consts';
import React from 'react';
import {Languages} from '../types/PropTypes';
import {Paragraph} from './shared/Paragraph';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {ITimeBasedOffer} from '../types/ITimeBasedOffer';
import {TimeBasedOfferItem} from './TimeBasedOfferItem';
import {Card} from './shared/Card';

interface IProps {
  lang: Languages;
}

export const TimeBaseOfferHero = async ({lang}: IProps) => {
  const response = await new ServerSideFetcher()
    .get<{offers: ITimeBasedOffer[]}>('/api/timeBasedOffer');

  return (
    <Hero variant={'column'} id={'offers'}>
      <Paragraph>
        <ServerText tag={DATA_KEY.TIME_BASED_OFFER_TEXT} lang={lang} />
      </Paragraph>

      <ul className='list-none flex flex-wrap max-w-5xl justify-center items-start gap-8'>
        {
          (response?.offers ?? [])
            .sort(({index: index1}, {index: index2}) => index1 - index2)
            .map(({photoURL, index, time, cost}) => (
              <li key={index}>
                <Card>
                  <TimeBasedOfferItem
                    time={time}
                    cost={cost}
                    imageSrc={photoURL}
                    lang={lang}
                  />
                </Card>
              </li>
            ))
        }
      </ul>
    </Hero>
  );
};
