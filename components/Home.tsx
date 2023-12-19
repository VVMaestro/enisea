import {Languages} from '../types/PropTypes';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';
import React, {Fragment} from 'react';

interface IProps {
  lang: Languages;
}

export const Home = ({ lang }: IProps) => {
  return (
    <Fragment>
      <Header lang={lang} />

      <Main lang={lang} />

      <Footer lang={lang} />
    </Fragment>
  );
};
