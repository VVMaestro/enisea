'use client';

import {PHOTO_TAG} from '../../consts';
import {PhotoUploader} from '../shared/PhotoUploader';
import React, {useEffect, useState} from 'react';
import {AdminCard} from '../shared/AdminCard';
import {IMedia} from '../shared/MediaList';
import {Fetcher} from '../../utils/Fetcher';
import {MediaWithDelete} from '../shared/MediaWithDelete';
import {Loading} from '../shared/Loading';

export const SpecialOfferPhoto = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    setLoading(true);

    const mediasResponse = await new Fetcher().get<{ medias: IMedia[] }>(`/api/media/?tag=${PHOTO_TAG.SPECIAL_OFFER_PHOTO}`);

    setMedias(mediasResponse?.medias ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className='flex flex-col gap-2 items-center'>
      <AdminCard title={'Special Offer Photo'}>
        <MediaWithDelete medias={medias} tiny actionCallback={fetchMedia} />

        {loading && <Loading />}

        <PhotoUploader
          placeholder={'Special offer photo'}
          photoCategory={PHOTO_TAG.SPECIAL_OFFER_PHOTO}
        />
      </AdminCard>
    </div>
  );
};
