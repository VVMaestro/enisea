import React from 'react';
import {Hero} from './shared/Hero';
import {Divider} from './shared/Divider';
import {WhoWeAreHero} from './WhoWeAreHero';
import {SpecialOffer} from './SpecialOffer';
import {Languages} from '../types/PropTypes';
import {AdvantagesHero} from './AdvantagesHero';
import {ProgramsHero} from './ProgramsHero';
import {TimeBaseOfferHero} from './TimeBaseOfferHero';
import {HomeWorkHero} from './HomeWorkHero';
import {AddressHero} from './AddressHero';

export function Main({lang}: {lang: Languages}) {
  return (
    <main className={'bg-base-200'}>
      <SpecialOffer lang={lang} />

      <Divider />

      <WhoWeAreHero lang={lang} />

      <Divider />

      <AdvantagesHero lang={lang} />

      <Divider />

      <ProgramsHero lang={lang} />

      <Divider />

      <TimeBaseOfferHero lang={lang} />

      <Divider />

      <HomeWorkHero lang={lang} />

      <Divider />

      <AddressHero lang={lang} />
    </main>
  );
}
