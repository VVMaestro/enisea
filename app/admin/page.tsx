'use client';

import React, {ChangeEvent, useState} from 'react';
import {Button} from '../../components/shared/Button/Button';
import {AsyncFileReader} from '../../utils/AsyncFileReader';
import {StaffTextEditor} from '../../components/StaffTextEditor';

export default function Page() {
  const [file, setFile] = useState<File>();

  async function onClickHandler() {
    try {
      if (!file) {
        return;
      }
      
      const mediaURL = await new AsyncFileReader().readFile(file);

      if (typeof mediaURL === 'string') {
        const mediaId = await fetch('/api/media', {
          method: 'POST',
          body: JSON.stringify({
            mediaURL,
            mediaTag: 'staff'
          })
        });

        console.log(mediaId);
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
    <React.Fragment>
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
      <StaffTextEditor />
    </React.Fragment>
  );
}
