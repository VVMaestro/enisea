import React from 'react';
import {Hero} from './shared/Hero';
import {Divider} from './shared/Divider';
import {StaffHero} from './StaffHero';
import {SpecialOffer} from './SpecialOffer';
import {Languages} from '../types/PropTypes';
import {AdvantagesHero} from './AdvantagesHero';
import {ProgramsHero} from './ProgramsHero';

export function Main({lang}: {lang: Languages}) {
  return (
    <main className={'bg-base-200'}>
      <SpecialOffer lang={lang} />

      <Divider />

      <StaffHero lang={lang} />

      <Divider />

      <AdvantagesHero lang={lang} />

      <Divider />

      <ProgramsHero />
    </main>
  );
}
