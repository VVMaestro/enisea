'use client';

import {IMedia, MediaList} from './MediaList';
import {Fetcher} from '../../utils/Fetcher';
import React from 'react';

interface IProps {
  medias: IMedia[];
  tiny?: boolean;
  actionCallback?: VoidFunction;
}

export const MediaWithDelete = ({medias, tiny, actionCallback}: IProps) => {
  const onAction = async (media: IMedia) => {
    await new Fetcher().delete(`/api/media/?mediaId=${media.publicId}`);

    actionCallback?.();
  };

  return (
    <MediaList medias={medias ?? []} tiny={tiny} action={onAction} />
  );
};
