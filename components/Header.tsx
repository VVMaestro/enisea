import React from 'react';
import {Logo} from './shared/Logo';
import {BurgerMenu} from './shared/BurgerMenu';
import {LanguageSelect} from './LanguageSelect';
import {Translator} from '../utils/Translator';
import {Languages} from '../types/PropTypes';

interface IProps {
  lang: Languages;
}

export function Header({lang}: IProps) {
  return (
    <header>
      <nav className='navbar bg-base-100 fixed z-10 px-10'>
        <div className='navbar-start flex gap-4 items-center min-w-fit'>
          <BurgerMenu lang={lang} />
        </div>
        <div className='navbar-end min-w-fit'>
          <LanguageSelect lang={lang} />
        </div>
      </nav>
    </header>
  );
}
