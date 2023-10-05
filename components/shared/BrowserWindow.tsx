import React, {ComponentPropsWithRef, ReactNode} from 'react';

interface IProps extends ComponentPropsWithRef<'section'> {
  toolbar?: ReactNode;
}

export function BrowserWindow({children, toolbar}: IProps) {
  return (
    <section className='mockup-browser border bg-base-300'>
      <div className='mockup-browser-toolbar'>
        <h3>{toolbar}</h3>
      </div>
      <div className='flex gap-4 bg-base-100 py-5 px-7'>
        {children}
      </div>
    </section>
  );
}