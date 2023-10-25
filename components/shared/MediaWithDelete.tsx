'use client';

import {IMedia, MediaList} from './MediaList';
import {Fetcher} from '../../utils/Fetcher';
import React, {useState} from 'react';
import {Loading} from './Loading';

interface IProps {
  medias: IMedia[];
  tiny?: boolean;
  actionCallback?: VoidFunction;
}

export const MediaWithDelete = ({medias, tiny, actionCallback}: IProps) => {
  const [loading, setLoading] = useState(false);

  const onAction = async (media: IMedia) => {
    setLoading(true);

    await new Fetcher().delete(`/api/media/?mediaId=${media.publicId}`);

    setLoading(false);

    actionCallback?.();
  };

  return (
    <div className='relative max-w-full'>
      {loading && <Loading />}

      <MediaList medias={medias ?? []} tiny={tiny} action={onAction}/>
    </div>
  );
};
