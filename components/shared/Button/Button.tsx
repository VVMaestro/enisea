'use client';

import React, {ComponentPropsWithRef} from 'react';
import {ButtonProps} from './ButtonProps';
import {getButtonStyles} from './getButtonStyles';

interface PropType extends ComponentPropsWithRef<'button'>, ButtonProps {}

export function Button(props: PropType) {
  const {
    children,
    onClick
  } = props;

  const classNames = getButtonStyles(props);

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
