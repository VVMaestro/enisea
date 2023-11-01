import Image from 'next/image';
import cn from 'classnames';
import {ComponentPropsWithRef} from 'react';

interface IProps extends ComponentPropsWithRef<'article'> {
  imgSrc: string;
  title: string;
  desc: string;
  isActionable?: boolean
}

export const ProgramItem = ({imgSrc, title, desc, isActionable = true}: IProps) => {
  return (
    <article
      className={cn('flex flex-col justify-center w-40', {
        ['transition cursor-pointer hover:scale-90']: isActionable
      })}
    >
      <Image width={200} height={0} src={imgSrc} alt={title} />

      <h3 className='text-lg text-center font-bold mb-3'>
        {title}
      </h3>

      <p className='text-center'>
        {desc}
      </p>
    </article>
  );
};
