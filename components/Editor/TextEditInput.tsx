'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {Button} from '../shared/Button/Button';
import {Textarea} from '../shared/Textarea';

interface IPropTypes extends ComponentPropsWithRef<'div'> {
  initialText?: string;
  textKey: string;
  placeholder?: string;
  view?: 'onelined' | 'multilined'
}

export function TextEditInput(props: IPropTypes) {
  const {textKey, view = 'multilined', placeholder = '', initialText = ''} = props;

  const [text, setText] = useState(initialText);

  async function onClickHandler() {
    await fetch('/api/text', {
      method: 'POST',
      body: JSON.stringify({key: textKey, text})
    });
  }

  function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) {
    const {target: {value}} = event;

    setText(value);
  }

  return (
    <div className='flex flex-col items-center gap-2 w-full'>
      {
        view === 'multilined' ? <Textarea
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={text}
        /> :
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered max-w-xs"
          value={text}
          onChange={onChangeHandler}
        />
      }
      <Button
        onClick={onClickHandler}
      >
        {'Сохранить текст'}
      </Button>
    </div>
  );
}
