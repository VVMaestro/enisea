'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {Button} from '../shared/Button/Button';
import {Textarea} from '../shared/Textarea';
import {Fetcher} from '../../utils/Fetcher';
import {Loading} from '../shared/Loading';

interface IPropTypes extends ComponentPropsWithRef<'div'> {
  initialText?: string;
  textKey: string;
  placeholder?: string;
  view?: 'onelined' | 'multilined'
}

export function TextEditInput(props: IPropTypes) {
  const fetcher = new Fetcher();

  const {textKey, view = 'multilined', placeholder = '', initialText = ''} = props;

  const [text, setText] = useState(initialText);

  const [loading, setLoading] = useState(false);

  async function onClickHandler() {
    setLoading(true);

    await fetcher.post('/api/text', {key: textKey, text});

    setLoading(false);
  }

  function onChangeHandler(event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) {
    const {target: {value}} = event;

    setText(value);
  }

  return (
    <article className='flex flex-col items-center gap-2 w-full relative'>
      {loading && <Loading />}

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
        styleType={'secondary'}
      >
        {'Save text'}
      </Button>
    </article>
  );
}
