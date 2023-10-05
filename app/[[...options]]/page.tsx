import React, {Fragment} from 'react';
import {Header} from '../../components/Header';
import {Main} from '../../components/Main';
import {Footer} from '../../components/Footer';
import {Languages} from '../../types/PropTypes';
import {LANGUAGE} from '../../consts';

interface IPropTypes {
  params: {
    options?: string[];
  };
}

export default function Page({params}: IPropTypes) {
  let lang: Languages = (params.options?.[0] ?? LANGUAGE.EN) as Languages;

  if (![LANGUAGE.EN, LANGUAGE.CZ].includes(lang)) {
    lang = LANGUAGE.EN;
  }

  return (
    <Fragment>
      <Header lang={lang} />
      <Main lang={lang} />
      <Footer />
    </Fragment>
  )
}
