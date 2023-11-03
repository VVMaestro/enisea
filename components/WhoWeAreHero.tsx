import React from 'react';
import {Hero} from './shared/Hero';
import {WhoPhotoList} from './WhoPhotoList';
import {ServerText} from './shared/ServerText';
import {Languages} from '../types/PropTypes';
import {DATA_KEY} from '../consts';
import {l10n} from '../utils/l10n';

export async function WhoWeAreHero({lang}: {lang: Languages}) {
  return (
    <Hero id={'who'} variant={'column'}>
      <h2 className={'text-5xl font-bold py-6'}>
        {`${l10n('Who we are', lang)}?`}
      </h2>

      <WhoPhotoList />

      <div>
        <p className={'text-xl py-6'}>
          <ServerText lang={lang} tag={DATA_KEY.STAFF_TEXT} />
        </p>
      </div>
    </Hero>
  );
}
