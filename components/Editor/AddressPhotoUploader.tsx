'use client';

import {useEffect, useState} from 'react';
import {IMedia} from '../shared/MediaList';
import {Fetcher} from '../../utils/Fetcher';
import {PHOTO_TAG} from '../../consts';
import {MediaWithDelete} from '../shared/MediaWithDelete';
import {PhotoUploader} from '../shared/PhotoUploader';

export const AddressPhotoUploader = () => {
  const [medias, setMedias] = useState<IMedia[]>([]);

  const getMedias = async () => {
    const response = await new Fetcher().get<{medias: IMedia[]}>(`/api/media?tag=${PHOTO_TAG.STUDIO_PHOTO}`);

    setMedias(response?.medias ?? []);
  };

  useEffect(() => {
    getMedias();
  }, []);

  return (
    <div>
      <MediaWithDelete
        medias={medias}
        tiny
        actionCallback={async () => {
          await getMedias();
        }}
      />

      <PhotoUploader
        photoCategory={PHOTO_TAG.STUDIO_PHOTO}
        uploadCallback={async () => {
          await new Promise((resolve) => {
            setTimeout(() => resolve(true), 1500);
          });

          await getMedias();
        }}
      />
    </div>
  );
};
