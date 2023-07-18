import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface PropType extends ComponentPropsWithRef<'button'> {
  href?: string;
  color?: 'primary' | 'secondary' | 'accent';
  view?: 'filled' | 'outlined';
  size?: 'lg' | 'md' | 'sm';
  normalCase?: boolean
}

export function Button(props: PropType) {
  const {
    children,
    href = '#',
    color = 'primary',
    view = 'filled',
    size = 'md',
    normalCase = true
  } = props;

  const classNames = cn(
    'btn btn-sm text-sm',
    {
      ['btn-primary']: color === 'primary',
      ['btn-secondary']: color === 'secondary',
      ['btn-accent']: color === 'accent',
      ['btn-outline']: view === 'outlined',
      ['btn-sm']: size === 'sm',
      ['btn-md']: size === 'md',
      ['btn-lg']: size === 'lg',
      ['normal-case']: normalCase  
    }
  );

  return (
    <a
     className={classNames}
     href={href}
    >
      {children}
    </a>
  );
}
