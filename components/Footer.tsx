import React, {ComponentPropsWithRef} from 'react';
import {SocialButton} from './SocialButton';
import {Logo} from './shared/Logo';
import {CompanyInfo} from './CompanyInfo';
import {Languages} from '../types/PropTypes';

interface IProps extends ComponentPropsWithRef<'footer'>{
  lang: Languages;
}

export function Footer({lang}: IProps) {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <Logo />

        <CompanyInfo lang={lang} />
      </div> 
      <div>
        <span className="footer-title">Social</span>

        <div className="grid grid-flow-col gap-4">
          <SocialButton social={'facebook'} />

          <SocialButton social={'inst'} />

          <SocialButton social={'tikTok'} />
        </div>
      </div>
    </footer>
  );
}
