'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {Button} from './Button/Button';

interface IPropTypes extends ComponentPropsWithRef<'article'> {
  photoCategory: string;
  uploadCallback?: VoidFunction;
}

export function PhotoUploader(props: IPropTypes) {
  const {photoCategory, uploadCallback} = props;

  const [file, setFile] = useState<File>();

  async function onClickHandler() {
    try {
      if (!file) {
        return;
      }
      
      const mediaURL = await new AsyncFileReader().readFile(file);

      if (typeof mediaURL === 'string') {
        await fetch('/api/media', {
          method: 'POST',
          body: JSON.stringify({
            mediaURL,
            mediaTag: photoCategory
          })
        });

        uploadCallback?.();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (file) {
      setFile(file);
    }
  }

  return (
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
        {'Загрузить файлы'}
      </Button>
    </article>
  )
}
