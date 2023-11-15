import {Join} from '../shared/Join';
import React from 'react';
import {Languages} from '../../types/PropTypes';
import {TextEditor} from './TextEditor';
import {DATA_KEY, LANGUAGE} from '../../consts';

export const CompanyInfoEditor = () => {
  return (
    <Join
      items={[
        <TextEditor
          key={1}
          textTag={DATA_KEY.COMPANY_INFO}
          lang={LANGUAGE.EN}
          inputType={'text'}
          placeholder={'English company info'}
        />,

        <TextEditor
          key={2}
          textTag={DATA_KEY.COMPANY_INFO}
          lang={LANGUAGE.CZ}
          inputType={'text'}
          placeholder={'Czeck company info'}
        />
      ]}
    />
  );
};
