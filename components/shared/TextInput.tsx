import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface IPropTypes extends ComponentPropsWithRef<'input'> {
  withFullWidth?: boolean;
}

export function TextInput(props: IPropTypes) {
  const {placeholder, onChange, value, name, type = 'text', withFullWidth = false} = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      className={cn('input input-bordered input-secondary max-w-xs', {['w-full']: withFullWidth})}
    />
  );
}
