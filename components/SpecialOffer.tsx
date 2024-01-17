import React from 'react';
import {Hero} from './shared/Hero';
import {Button} from './shared/Button/Button';
import {ServerText} from './shared/ServerText';
import {Languages} from '../types/PropTypes';
import {l10n} from '../utils/l10n';
import {SignUpButton} from './SignUpButton';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {IMedia} from './shared/MediaList';
import {PHOTO_TAG} from '../consts';

interface IPropTypes {
  lang: Languages;
}

export async function SpecialOffer({lang}: IPropTypes) {
  const response = await new ServerSideFetcher().get<{medias: IMedia[]}>(`/api/media?tag=${PHOTO_TAG.SPECIAL_OFFER_PHOTO}`);

  const mediaUrl = response?.medias?.[0] ? response?.medias?.[0].secureUrl : '';

  return (
    <Hero overlay={true} style={{backgroundImage: `url(${mediaUrl})`}}>
      <div className={'max-w-md'}>
        <h2 className={'mb-5 text-5xl font-bold'}>
          <ServerText lang={lang} tag={'specialOfferTitle'} />
        </h2>

        <p className={'mb-5 text-lg lg:text-2xl'}>
          <ServerText lang={lang} tag={'specialOffer'} />
        </p>

        <SignUpButton lang={lang} />
      </div>
    </Hero>
  );
}
