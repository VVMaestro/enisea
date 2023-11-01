'use client';

import {ComponentPropsWithRef} from 'react';

interface IProps extends ComponentPropsWithRef<'input'>{}

export const Uploader = (props: IProps) => {
  const {onChange} = props;

  return (
    <input
      type={'file'}
      className={'file-input w-full max-w-xs'}
      onChange={onChange}
    />
  );
};
