import {Languages} from '../types/PropTypes';
import {l10n} from '../utils/l10n';
import React from 'react';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {DATA_KEY} from '../consts';
import {LinkButton} from './shared/Button/LinkButton';
import {ButtonProps} from './shared/Button/ButtonProps';

interface IProps extends ButtonProps{
  lang: Languages;
}

export const SignUpButton = async ({lang, styleType = 'accent'}: IProps) => {
  const linkResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${DATA_KEY.SIGN_UP_LINK}`);

  return (
    <LinkButton
      href={linkResponse?.text ?? '#'}
      styleType={styleType}
      view={'filled'}
      normalCase={false}
    >
      {`${l10n('Sign Up', lang)}`}
    </LinkButton>
  );
};
