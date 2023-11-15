import {ComponentPropsWithRef} from 'react';
import Image from 'next/image';
import cn from 'classnames';
import {l10n} from '../utils/l10n';
import {Languages} from '../types/PropTypes';

interface IProps extends ComponentPropsWithRef<'article'>{
  time: string;
  cost: string;
  imageSrc: string;
  lang: Languages;
  compact?: boolean;
}

export const TimeBasedOfferItemView = ({imageSrc, time, cost, lang, compact = false}: IProps) => {
  return (
    <article className={cn('flex flex-col justify-center gap-2', {
      ['w-40']: compact,
      ['w-60']: !compact
    })}>
      <div className={'aspect-square object-cover flex items-center'}>
        <Image
          width={200}
          height={200}
          src={imageSrc}
          alt={'Time based offer photo'}
          className='rounded-lg shadow-2xl w-full'
        />
      </div>

      <p className='text-center'>{`${l10n('Price', lang)}: ${cost}`}</p>

      <p className='text-center'>{`${l10n('Time', lang)}: ${time} min.`}</p>
    </article>
  );
};
