'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {Button} from './Button/Button';
import {Loading} from './Loading';
import {Uploader} from './Uploader';
import {Join} from './Join';

interface IPropTypes extends ComponentPropsWithRef<'article'> {
  photoCategory: string;
  uploadCallback?: (mediaId: string) => void;
}

interface UploadBody {
  mediaId: string;
}

export function PhotoUploader(props: IPropTypes) {
  const {photoCategory, uploadCallback} = props;

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File>();

  async function onClickHandler() {
    try {
      if (!file) {
        return;
      }

      setLoading(true);
      
      const mediaURL = await new AsyncFileReader().readFile(file);

      if (typeof mediaURL === 'string') {
        const uploadResponse = await fetch('/api/media', {
          method: 'POST',
          body: JSON.stringify({
            mediaURL,
            mediaTag: photoCategory
          })
        });

        if (uploadResponse.ok) {
          const {mediaId}: UploadBody = await uploadResponse.json();

          uploadCallback?.(mediaId);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (file) {
      setFile(file);
    }
  }

  return (
    <article className='relative'>
      {loading && <Loading />}

      <Join items={[
        <Uploader
          key={1}
          onChange={onChangeHandler}
        />,

        <Button
          key={2}
          className={'join-item'}
          onClick={onClickHandler}
          styleType={'secondary'}
        >
          {'Upload'}
        </Button>
      ]} />
    </article>
  )
}
