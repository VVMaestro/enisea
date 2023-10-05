import React from 'react';
import {MediaList} from './shared/MediaList';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';
import {PHOTO_TAG} from '../consts';
import {IMediaData} from '../utils/CloudService/CloudService';

export async function WhoPhotoList() {
  const responseData = await new ServerSideFetcher().get<{medias: IMediaData[]}>(`/api/media/?tag=${PHOTO_TAG.WHO_PHOTO}`);

  const medias = responseData?.medias?.map(({url, secureUrl, publicId, assetId}) => {
    return {
      url,
      secureUrl,
      publicId,
      assetId,
      alt: ''
    };
  });

  return (
    <MediaList medias={medias ?? []} />
  );
}
