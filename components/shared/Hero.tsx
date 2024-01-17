import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface PropTypes extends ComponentPropsWithRef<'section'> {
  variant?: 'row' | 'column';
  overlay?: boolean;
  gapSize?: 'md' | 'lg';
}

export function Hero(props: PropTypes) {
  const {
    style,
    className,
    children,
    id,
    variant = 'row',
    overlay = false,
    gapSize
  } = props;

  return (
    <section 
      id={id}
      className={cn(
        'hero min-h-screen',
        className
      )}
      style={style}
    >
      {
        overlay && (
          <div className={'hero-overlay bg-opacity-60'}></div>
        )
      }
      <div 
        className={cn(
          'hero-content flex-col lg:flex-row text-center text-neutral-content w-full',
          {
            ['lg:flex-col']: variant === 'column',
            ['gap-x-7']: variant === 'row' && gapSize === 'md',
            ['gap-x-24']: variant === 'row' && gapSize === 'lg'
          }
        )}
      >
        {children}
      </div>
    </section>
  );
}
