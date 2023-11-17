import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface PropTypes extends ComponentPropsWithRef<'section'> {
  variant?: 'row' | 'column';
  overlay?: boolean;
}

export function Hero(props: PropTypes) {
  const {style, className, children, id, variant = 'row', overlay = false} = props;

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
          'hero-content flex-col lg:flex-row text-center text-neutral-content',
          {
            ['lg:flex-col']: variant === 'column',
            ['gap-7']: variant === 'row'
          }
        )}
      >
        {children}
      </div>
    </section>
  );
}
