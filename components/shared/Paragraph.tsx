import {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface IProps extends ComponentPropsWithRef<'p'> {
  textPlacement?: 'center' | 'right' | 'left';
  withMargin?: boolean;
}

export const Paragraph = ({children, textPlacement = 'center', withMargin = true}: IProps) => {
  return (
    <p
      className={cn('text-xl lg:text-4xl text-center', {
        ['mb-20']: withMargin,
        ['lg:text-center']: textPlacement === 'center',
        ['lg:text-right']: textPlacement === 'right',
        ['lg:text-left']: textPlacement === 'left'
      })}
    >
      {children}
    </p>
  );
};
