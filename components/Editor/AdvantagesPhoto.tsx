'use client';

import React, {useEffect, useState} from 'react';
import {IMedia} from '../shared/MediaList';
import {Fetcher} from '../../utils/Fetcher';
import {PHOTO_TAG} from '../../consts';
import {AdminCard} from '../shared/AdminCard';
import {MediaWithDelete} from '../shared/MediaWithDelete';
import {Loading} from '../shared/Loading';
import {PhotoUploader} from '../shared/PhotoUploader';

export const AdvantagesPhoto = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    setLoading(true);

    const mediasResponse = await new Fetcher().get<{ medias: IMedia[] }>(`/api/media/?tag=${PHOTO_TAG.ADVANTAGES_PHOTO}`);

    setMedias(mediasResponse?.medias ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className='flex flex-col gap-2 items-center'>
      <AdminCard title={'Advantages Photo'}>
        <MediaWithDelete medias={medias} tiny actionCallback={fetchMedia} />

        {loading && <Loading />}

        <PhotoUploader
          placeholder={'Advantages photo'}
          photoCategory={PHOTO_TAG.ADVANTAGES_PHOTO}
        />
      </AdminCard>
    </div>
  );
};
