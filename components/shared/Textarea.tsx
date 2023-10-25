import {ComponentPropsWithRef} from 'react';

interface IProps extends ComponentPropsWithRef<'textarea'> {}

export const Textarea = (props: IProps) => {
  const {placeholder, onChange, value} = props;

  return (
    <textarea
      className='textarea textarea-bordered max-w-xl w-full h-52 resize-none'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};
