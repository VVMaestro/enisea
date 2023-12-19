import {Hero} from './shared/Hero';
import {Languages} from '../types/PropTypes';
import {l10n} from '../utils/l10n';
import {Paragraph} from './shared/Paragraph';
import {ServerText} from './shared/ServerText';
import {DATA_KEY, PHOTO_TAG} from '../consts';
import {Carousel} from './shared/Carousel';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {IMedia} from './shared/MediaList';
import React from 'react';

interface IProps {
  lang: Languages;
}

export const AddressHero = async ({lang}: IProps) => {
  const mediasResponse = await new ServerSideFetcher()
    .get<{medias: IMedia[]}>(`/api/media?tag=${PHOTO_TAG.STUDIO_PHOTO}`);

  return (
    <Hero variant={'column'} id={'studio'}>
      <h2 className={'text-3xl lg:text-5xl font-bold py-6 text-left'}>
        {l10n('Studio', lang)}
      </h2>

      <div className={'flex flex-col items-center gap-4'}>
        <Paragraph>
          <b>{`${l10n('Address', lang)}: `}</b>
          <ServerText tag={DATA_KEY.ADDRESS_TEXT} lang={lang} />
        </Paragraph>

        <Carousel photoList={mediasResponse?.medias ?? []} />
      </div>
    </Hero>
  );
};