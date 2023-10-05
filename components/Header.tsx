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
      <nav className='navbar bg-base-100 fixed z-10'>
        <div className='navbar-start'>
          <Logo />
          <BurgerMenu lang={lang} />
        </div>
        <div className='navbar-end'>
          <LanguageSelect />
        </div>
      </nav>
    </header>
  );
}
