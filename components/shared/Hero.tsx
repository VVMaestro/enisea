import React, {ComponentPropsWithRef} from 'react';
import cn from 'classnames';

interface PropTypes extends ComponentPropsWithRef<'section'> {
  
}

export function Hero(props: PropTypes) {
  const {className, children, id} = props;

  return (
    <section id={id} className={cn('hero min-h-screen', className)}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        {children}
      </div>
    </section>
  );
}
