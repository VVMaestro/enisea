import React, {Fragment} from 'react';
import {Header} from '../../components/Header';
import {Main} from '../../components/Main';
import {Footer} from '../../components/Footer';
import {Languages} from '../../types/PropTypes';

interface IPropTypes {
  params: {
    options?: string[];
  };
}

export default function Page({params}: IPropTypes) {
  let lang: Languages = (params.options?.[0] ?? 'en') as Languages;

  if (!['en', 'cz'].includes(lang)) {
    lang = 'en';
  }

  return (
    <Fragment>
      <Header />
      <Main lang={lang} />
      <Footer />
    </Fragment>
  )
}
