import React from 'react';
import {Logo} from './shared/Logo';
import {BurgerMenu} from './shared/BurgerMenu';
import {LanguageSelect} from './LanguageSelect';

export function Header() {
  return (
    <header>
      <nav className='navbar bg-base-100 fixed z-10'>
        <div className='navbar-start'>
          <Logo />
          <BurgerMenu />
        </div>
        <div className='navbar-end'>
          <LanguageSelect />
        </div>
      </nav>
    </header>
  );
}
