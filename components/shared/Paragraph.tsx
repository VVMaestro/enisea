import {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface IProps extends ComponentPropsWithRef<'p'> {
  textPlacement?: 'center' | 'right' | 'left';
  withMargin?: boolean;
}

export const Paragraph = ({children, textPlacement = 'center', withMargin = true}: IProps) => {
  return (
    <p
      className={cn('text-xl lg:text-4xl', {
        ['mb-20']: withMargin,
        ['text-center']: textPlacement === 'center',
        ['text-right']: textPlacement === 'right',
        ['text-left']: textPlacement === 'left'
      })}
    >
      {children}
    </p>
  );
};
