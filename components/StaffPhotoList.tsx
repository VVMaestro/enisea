import React from 'react';
import {MediaList} from './shared/MediaList';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {PHOTO_TAG} from '../app/consts';

export async function StaffPhotoList() {
  const responseData = await new ServerSideFetcher().get<{medias: string[]}>(`/api/media/?tag=${PHOTO_TAG.STAFF_PHOTO}`);

  const medias = responseData?.medias?.map((mediaURL) => {
    return {
      url: mediaURL,
      alt: ''
    };
  });

  return (
    <MediaList medias={medias ?? []} />
  );
}
