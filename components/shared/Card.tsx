import {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface IProps extends ComponentPropsWithRef<'div'> {
  design?: 'normal' | 'compact';
  bordered?: boolean;
}

export const Card = ({children, bordered = false, design = 'normal'}: IProps) => {
  return (
    <div className={cn('card shadow-xl', {
      ['card-compact']: design === 'compact',
      ['card-normal']: design === 'normal',
      ['card-bordered']: bordered
    })}>
      <div className='card-body'>
        {children}
      </div>
    </div>
  );
};
