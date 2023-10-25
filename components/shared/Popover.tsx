import {ComponentPropsWithRef, ReactNode} from 'react';
import cn from 'classnames';

interface IProps extends ComponentPropsWithRef<'div'> {
  element: ReactNode;
  disable?: boolean;
  horizontal?: 'start' | 'center' | 'end';
  vertical?: 'top' | 'middle' | 'bottom';
}

export const Popover = ({children, element, disable, horizontal = 'end', vertical = 'top'}: IProps) => {
  return (
    <div className='indicator group'>
      {children}
      <div
        className={cn('indicator-item indicator-top hidden', {
          ['group-hover:block group-active:block']: !disable,
          ['indicator-start']: horizontal === 'start',
          ['indicator-center']: horizontal === 'center',
          ['indicator-end']: horizontal === 'end',
          ['indicator-top']: vertical === 'top',
          ['indicator-middle']: vertical === 'middle',
          ['indicator-bottom']: vertical === 'bottom'
        })}
      >
        {element}
      </div>
    </div>
  );
};
