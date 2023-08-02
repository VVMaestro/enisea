import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface PropTypes extends ComponentPropsWithRef<'article'> {
  color?: 'default' | 'orange';
  withPadding?: boolean;
}

export function Divider(props: PropTypes) {
  const {color = 'default', withPadding = true} = props;

  return (
    <div
      className={cn(
        'divider',
        {
          ['px-5']: withPadding,
          ['before:bg-orange-400 after:bg-orange-400']: color === 'orange'
        }
      )}
    />
  );
}
