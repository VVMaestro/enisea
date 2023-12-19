import {IMedia} from './MediaList';
import Image from 'next/image';
import cn from 'classnames';

interface IProps {
  photoList: IMedia[];
  design?: 'vertical' | 'horizontal';
}

export const Carousel = (props: IProps) => {
  const {photoList, design = 'horizontal'} = props;

  return (
    <ul
      className={
        cn('carousel rounded-box', {
          ['carousel-vertical h-96 lg:w-[32rem]']: design === 'vertical',
          ['lg:w-[32rem] h-80']: design === 'horizontal'
        })
      }
    >
      {
        photoList.map((photoItem, index) => {
          return (
            <li
              id={`slide${index}`}
              key={photoItem.assetId}
              className={
                cn('carousel-item justify-center relative', {
                  ['h-full']: design === 'vertical',
                  ['w-full']: design === 'horizontal'
                })
              }
            >
              <Image
                className={'w-auto object-contain rounded'}
                src={photoItem.secureUrl ?? photoItem.url}
                alt={photoItem.alt ?? 'Carousel photo'}
                width={400}
                height={0}
              />
              {photoList.length > 1 && (
                <div className={'absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2'}>
                  <a
                    href={`#slide${index === 0 ? photoList.length - 1 : index - 1}`}
                    className={'btn btn-circle btn-neutral opacity-50'}
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${index === photoList.length - 1 ? 0 : index + 1}`}
                    className={'btn btn-circle btn-neutral opacity-50'}
                  >
                    ❯
                  </a>
                </div>
              )}
            </li>
          );
        })
      }
    </ul>
  );
};
