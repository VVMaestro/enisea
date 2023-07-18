import React, {Fragment} from 'react';
import {Header} from '../components/Header';
import {Main} from '../components/Main';
import {Footer} from '../components/Footer';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}
