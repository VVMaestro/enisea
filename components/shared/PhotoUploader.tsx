'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {Button} from './Button/Button';
import {Loading} from './Loading';

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
    }
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (file) {
      setFile(file);
    }
  }

  return (
    <div className='relative'>
      {loading && <Loading />}

      <article className={'join'}>
        <input
          type={'file'}
          className={'file-input w-full max-w-xs join-item'}
          onChange={onChangeHandler}
        />

        <Button
          className={'join-item'}
          onClick={onClickHandler}
        >
          {'Upload'}
        </Button>
      </article>
    </div>
  )
}
