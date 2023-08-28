'use client';

import React, {ReactNode} from 'react';
import {ButtonProps} from './ButtonProps';
import {getButtonStyles} from './getButtonStyles';
import Link, {LinkProps} from 'next/link';

interface PropType extends LinkProps, ButtonProps {
  children?: ReactNode;
}

export function LinkButton(props: PropType) {
  const {href, onClick, children} = props;

  const classNames = getButtonStyles(props);
  
  return (
    <Link
      className={classNames}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
