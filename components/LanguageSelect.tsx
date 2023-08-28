'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {LinkButton} from './shared/Button/LinkButton';

const LANG = {
  EN: 'en',
  CZ: 'cz'
};

export function LanguageSelect() {
  const options = useParams().options;

  let language = Array.isArray(options) ? options[0] : LANG.EN;

  if (![LANG.EN, LANG.CZ].includes(language)) {
    language = LANG.EN;
  }

  const path = `/${language === LANG.EN ? LANG.CZ : LANG.EN}`;
  const title = language === LANG.EN ? 'CZ' : 'EN';

  return (
    <LinkButton styleType={'ghost'} view={'outlined'} href={path}>
      {title}
    </LinkButton>
  );
}
