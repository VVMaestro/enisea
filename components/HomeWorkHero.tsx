import {Hero} from './shared/Hero';
import {Languages} from '../types/PropTypes';
import Image from 'next/image';
import {Paragraph} from './shared/Paragraph';
import React from 'react';
import {ServerText} from './shared/ServerText';
import {DATA_KEY, PHOTO_TAG} from '../consts';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {IMedia} from './shared/MediaList';

interface IProps {
  lang: Languages;
}

export const HomeWorkHero = async ({lang}: IProps) => {
  const response = await new ServerSideFetcher().get<{medias: IMedia[]}>(`/api/media?tag=${PHOTO_TAG.HOME_VISIT_PHOTO}`);

  const mediaUrl = response?.medias?.[0] ? response?.medias?.[0].secureUrl : '';

  return (
    <Hero variant={'row'} lang={lang} id={'homeVisit'}>
      <Image
        className={'lg:max-w-lg lg:w-auto w-full rounded-lg shadow-2xl'}
        width={500}
        height={0}
        src={mediaUrl}
        alt={'Home visit photo'}
      />

      <div>
        <h2 className={'text-3xl lg:text-5xl font-bold py-6 text-center lg:text-left'}>
          {<ServerText tag={DATA_KEY.HOME_VISIT_TITLE} lang={lang} />}
        </h2>

        <Paragraph textPlacement={'left'} withMargin={false}>
          <ServerText tag={DATA_KEY.HOME_VISIT_TEXT} lang={lang} />
        </Paragraph>
      </div>
    </Hero>
  );
}
