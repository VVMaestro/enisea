import React from 'react';
import {MediaList} from './shared/MediaList';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';

export async function StaffPhotoList() {
  const responseData: {medias: string[]} = await new ServerSideFetcher().get('/api/media/?tag=staff');

  const medias = responseData?.medias?.map((mediaURL) => {
    return {
      url: mediaURL,
      alt: ''
    };
  });

  return (
    <MediaList medias={medias} />
  );
}
