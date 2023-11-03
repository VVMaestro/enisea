import {ComponentPropsWithRef} from 'react';

interface IProps extends ComponentPropsWithRef<'p'> {}

export const Paragraph = ({children}: IProps) => {
  return (
    <p className='text-4xl text-center mb-20'>
      {children}
    </p>
  );
};
