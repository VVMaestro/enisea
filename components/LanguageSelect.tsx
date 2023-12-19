'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {LinkButton} from './shared/Button/LinkButton';
import {Languages} from '../types/PropTypes';

const LANG = {
  EN: 'en',
  CZ: 'cz'
};

interface IProps {
  lang: Languages;
}

export function LanguageSelect({ lang }: IProps) {

  const path = `/${lang === LANG.EN ? LANG.CZ : LANG.EN}`;
  const title = lang === LANG.EN ? 'CZ' : 'EN';

  return (
    <LinkButton styleType={'ghost'} view={'outlined'} href={path}>
      {title}
    </LinkButton>
  );
}
