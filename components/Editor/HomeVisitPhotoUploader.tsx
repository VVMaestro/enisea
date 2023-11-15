'use client';

import {useEffect, useState} from 'react';
import {IMedia} from '../shared/MediaList';
import {Fetcher} from '../../utils/Fetcher';
import {PHOTO_TAG} from '../../consts';
import {MediaWithDelete} from '../shared/MediaWithDelete';
import {PhotoUploader} from '../shared/PhotoUploader';

export const HomeVisitPhotoUploader = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);

  const getMedias = async () => {
    const response = await new Fetcher().get<{medias: IMedia[]}>(`/api/media?tag=${PHOTO_TAG.HOME_VISIT_PHOTO}`);

    setMedias(response?.medias ?? []);
  }

  useEffect(() => {
    getMedias();
  }, []);

  return (
    <div>
      <MediaWithDelete medias={medias} tiny />

      <PhotoUploader photoCategory={PHOTO_TAG.HOME_VISIT_PHOTO}/>
    </div>
  );
};
