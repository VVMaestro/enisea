import {ComponentPropsWithRef} from 'react';

interface IProps extends ComponentPropsWithRef<'article'>{
  title: string;
}

export function AdminCard({children, title}: IProps) {
  return (
    <article className={'card bg-neutral text-neutral-content w-96'}>
      <div className='card-body items-center'>
        <h2 className='card-title text-center'>{title}</h2>
        {children}
      </div>
    </article>
  );
}
