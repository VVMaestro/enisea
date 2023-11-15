import {Languages} from '../types/PropTypes';
import React from 'react';
import {DATA_KEY} from '../consts';
import {ServerText} from './shared/ServerText';

interface IProps {
  lang: Languages;
}

export const CompanyInfo = ({lang}: IProps) => {
  return (
    <p>
      <ServerText tag={DATA_KEY.COMPANY_INFO} lang={lang} />
    </p>
  );
};
