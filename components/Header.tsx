import React from 'react';
import {Button} from './shared/Button/Button';
import {Logo} from './shared/Logo';
import {BurgerMenu} from './shared/BurgerMenu';

export function Header() {
  return (
    <header>
      <nav className='navbar bg-base-100 fixed z-10'>
        <div className='navbar-start'>
          <Logo />
          <BurgerMenu />
        </div>
        <div className='navbar-end'>
          <Button styleType={'accent'} view={'outlined'} normalCase={false}>Записаться</Button>
        </div>
      </nav>
    </header>
  );
}
