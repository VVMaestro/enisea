import React from 'react';
import {Logo} from './shared/Logo';
import {BurgerMenu} from './shared/BurgerMenu';
import {LanguageSelect} from './LanguageSelect';
import {Translator} from '../utils/Translator';
import {Languages} from '../types/PropTypes';
import {PhoneNumber} from './shared/PhoneNumber';

interface IProps {
  lang: Languages;
}

export function Header({lang}: IProps) {
  return (
    <header>
      <nav className='navbar bg-base-100 fixed z-10 px-10'>
        <div className='navbar-start flex sm:gap-4 gap-1 items-center min-w-fit'>
          <BurgerMenu lang={lang} />
        </div>
        <div className='navbar-end min-w-fit sm:gap-4 gap-1'>
          <PhoneNumber />

          <LanguageSelect lang={lang} />
        </div>
      </nav>
    </header>
  );
}
