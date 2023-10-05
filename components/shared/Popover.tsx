import {ComponentPropsWithRef, ReactNode} from 'react';
import cn from 'classnames';

interface IProps extends ComponentPropsWithRef<'div'> {
  element: ReactNode;
  disable?: boolean;
}

export const Popover = ({children, element, disable}: IProps) => {
  return (
    <div className='indicator group'>
      {children}
      <div className={cn('indicator-item indicator-top hidden', {['group-hover:block group-active:block']: !disable})}>
        {element}
      </div>
    </div>
  );
};
