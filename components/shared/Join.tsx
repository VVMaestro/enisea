import cn from 'classnames';
import {ComponentPropsWithRef, ReactNode} from 'react';

interface IProps extends ComponentPropsWithRef<'div'>{
  design?: 'vertical' | 'horizontal';
  items: ReactNode[];
}

export const Join = ({items, design = 'horizontal'}: IProps) => {
  return (
    <div className={cn('join', {
      ['join-vertical']: design === 'vertical',
      ['join-horizontal']: design === 'horizontal'
    })}>
      {
        items.map((item, key) => (
          <div key={key} className='join-item'>
            {item}
          </div>
        ))
      }
    </div>
  );
};
