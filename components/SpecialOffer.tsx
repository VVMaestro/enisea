import React from 'react';
import {Hero} from './shared/Hero';
import {Button} from './shared/Button/Button';
import {ServerText} from './shared/ServerText';
import {Languages} from '../types/PropTypes';
import {l10n} from '../utils/l10n';
import {SignUpButton} from './SignUpButton';

interface IPropTypes {
  lang: Languages;
}

export function SpecialOffer({lang}: IPropTypes) {
  return (
    <Hero className={'hero-image'} overlay={true}>
      <div className={'max-w-md'}>
        <h2 className={'mb-5 text-5xl font-bold'}>
          <ServerText lang={lang} tag={'specialOfferTitle'} />
        </h2>

        <p className={'mb-5'}>
          <ServerText lang={lang} tag={'specialOffer'} />
        </p>

        <SignUpButton lang={lang} />
      </div>
    </Hero>
  );
}
