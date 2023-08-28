import React from 'react';
import {Hero} from './shared/Hero';
import {StaffPhotoList} from './StaffPhotoList';
import {ServerText} from './shared/ServerText';
import {Languages} from '../types/PropTypes';
import {DATA_KEY} from '../app/consts';

export async function StaffHero({lang}: {lang: Languages}) {
  return (
    <Hero id={'who'} variant={'column'}>
      <h2 className={'text-5xl font-bold py-6'}>Кто мы?</h2>
      <StaffPhotoList />
      <div>
        <p className={'text-xl py-6'}>
          <ServerText lang={lang} tag={DATA_KEY.STAFF_TEXT} />
        </p>
      </div>
    </Hero>
  );
}
