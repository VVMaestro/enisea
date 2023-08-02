'use client';

import React, {ComponentPropsWithRef, MouseEvent, useState} from 'react';
import cn from 'classnames';
import {LinkButton} from './Button/LinkButton';

interface PropTypes extends ComponentPropsWithRef<'div'> {

}

function onMenuItemClick(event: MouseEvent) {
  event.preventDefault();
}

export function BurgerMenu(props: PropTypes) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('drawer')}>
      <input type="checkbox" readOnly={true} className="drawer-toggle" checked={isOpen} />
      <div className={'drawer-content'}>
        <LinkButton
          square={true}
          styleType={'ghost'}
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-5 h-5 stroke-current'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </LinkButton>
      </div>
      <div className={'drawer-side'}>
        <div onClick={() => setIsOpen(false)} className={'drawer-overlay'} />
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          <li>
            <LinkButton onClick={onMenuItemClick} className={'content-center'} href={'#who'} styleType={'ghost'}>Кто мы?</LinkButton>
          </li>
          <li>
            <LinkButton className={'content-center'} href={'#'} styleType={'ghost'}>Преимущества</LinkButton>
          </li>
          <li>
            <LinkButton className={'content-center'} href={'#services'} styleType={'ghost'}>Услуги</LinkButton>
          </li>
          <li>
            <LinkButton className={'content-center'} href={'#'} styleType={'ghost'}>Акции</LinkButton>
          </li>
          <li>
            <LinkButton className={'content-center'} href={'#'} styleType={'ghost'}>Команда</LinkButton>
          </li>
          <li>
            <LinkButton className={'content-center'} href={'#'} styleType={'ghost'}>Контакты</LinkButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
