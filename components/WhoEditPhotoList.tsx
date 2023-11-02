'use client';

import {AdminCard} from './shared/AdminCard';
import {PhotoUploader} from './shared/PhotoUploader';
import {PHOTO_TAG} from '../consts';
import React, {useEffect, useState} from 'react';
import {IMedia} from './shared/MediaList';
import {Fetcher} from '../utils/Fetcher';
import {MediaWithDelete} from './shared/MediaWithDelete';
import {Loading} from './shared/Loading';

export const WhoEditPhotoList = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    setLoading(true);

    const mediasResponse = await new Fetcher().get<{ medias: IMedia[] }>(`/api/media/?tag=${PHOTO_TAG.WHO_PHOTO}`);

    setMedias(mediasResponse?.medias ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className='flex flex-col gap-2 items-center'>
      <AdminCard title={'Staff Photo'}>
        <MediaWithDelete medias={medias} tiny actionCallback={fetchMedia} />

        {loading && <Loading />}

        <PhotoUploader photoCategory={PHOTO_TAG.WHO_PHOTO} uploadCallback={fetchMedia} />
      </AdminCard>
    </div>
  );
};
