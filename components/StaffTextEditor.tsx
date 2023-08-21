'use client';

import React, {ChangeEvent, useState} from 'react';
import {Button} from './shared/Button/Button';

export function StaffTextEditor() {
  const [text, setText] = useState('');

  async function onClickHandler() {
    await fetch('/api/text', {
      method: 'POST',
      body: JSON.stringify({key: 'staffText', text})
    });
  }

  function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    const {target: {value}} = event;

    setText(value);
  }

  return (
    <article>
      <textarea
        className={'textarea textarea-bordered'}
        placeholder={'Staff presentation text'}
        onChange={onChangeHandler}
        value={text}
      ></textarea>
      <Button
        onClick={onClickHandler}
      >
        {'Сохранить текст'}
      </Button>
    </article>
  );
}
