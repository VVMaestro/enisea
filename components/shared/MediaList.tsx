import React, {ComponentPropsWithRef} from 'react';
import Image from 'next/image';

interface IPropTypes extends ComponentPropsWithRef<'ul'> {
  medias: {
    url: string;
    alt: string;
  }[];
}

export function MediaList({medias}: IPropTypes) {
  return (
    <ul className={'flex flex-row items-center gap-2 list-none'}>
      {
        medias.map(({url, alt}, index) => (
          <li key={index}>
            <Image
              src={url}
              width={300}
              height={0}
              className={'max-w-sm rounded-lg shadow-2xl'}
              alt={alt}
            />
          </li>
        ))
      }
    </ul>
  );
}
