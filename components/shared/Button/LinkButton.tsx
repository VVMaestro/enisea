import React, {ComponentPropsWithRef} from 'react';
import {ButtonProps} from './ButtonProps';
import {getButtonStyles} from './getButtonStyles';

interface PropType extends ComponentPropsWithRef<'a'>, ButtonProps {}

export function LinkButton(props: PropType) {
  const {href, onClick, children} = props;

  const classNames = getButtonStyles(props);
  
  return (
    <a
      className={classNames}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
