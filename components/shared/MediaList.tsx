'use client';

import React, {ComponentPropsWithRef} from 'react';
import Image from 'next/image';
import {Button} from './Button/Button';
import {Cross as CrossIcon} from './Icons/Cross';
import {Popover} from './Popover';

export interface IMedia {
  url: string;
  secureUrl: string;
  publicId: string;
  assetId: string;
  alt: string;
}

interface IPropTypes extends ComponentPropsWithRef<'ul'> {
  medias: IMedia[];
  tiny?: boolean;
  action?: (media: IMedia) => void;
}

export function MediaList({medias, tiny, action}: IPropTypes) {
  return (
    <ul className={'flex flex-row items-center gap-2 list-none flex-wrap justify-center'}>
      {
        medias.map((media, index) => (
          <li key={index}>
            <Popover
              disable={!action}
              element={(
                <Button size={'xs'} circle styleType={'secondary'} onClick={() => action?.(media)}>
                  <CrossIcon/>
                </Button>
              )}
            >
              <Image
                src={media.secureUrl ?? media.url}
                width={tiny ? 80 : 300}
                height={0}
                className={'max-w-sm rounded-lg shadow-2xl'}
                alt={media.alt}
              />
            </Popover>
          </li>
        ))
      }
    </ul>
  );
}
