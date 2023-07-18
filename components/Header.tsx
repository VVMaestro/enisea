import React from 'react';
import {Button} from './shared/Button';
import {Logo} from './shared/Logo';

export function Header() {
  return (
    <header>
      <nav className='navbar bg-base-100 fixed z-10'>
        <div className='navbar-start'>
          <Logo />
        </div>
        <div className='navbar-center gap-5'>
          <Button href={'#who'} view={'outlined'} size={'sm'}>Кто мы?</Button>
          <Button href={'#'} color={'secondary'} view={'outlined'} size={'sm'}>Преимущества</Button>
          <Button href={'#services'} color={'secondary'} view={'outlined'} size={'sm'}>Услуги</Button>
          <Button href={'#'} color={'secondary'} view={'outlined'} size={'sm'}>Акции</Button>
          <Button href={'#'} color={'secondary'} view={'outlined'} size={'sm'}>Команда</Button>
          <Button href={'#'} color={'secondary'} view={'outlined'} size={'sm'}>Контакты</Button>
        </div>
        <div className='navbar-end'>
          <Button color={'accent'} view={'outlined'} normalCase={false}>Записаться</Button>
        </div>
      </nav>
    </header>
  );
}
