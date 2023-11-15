'use client';

import React, {ChangeEvent, ComponentPropsWithRef, useState} from 'react';
import {Button} from '../shared/Button/Button';
import {Textarea} from '../shared/Textarea';
import {Fetcher} from '../../utils/Fetcher';
import {Loading} from '../shared/Loading';
import cn from 'classnames';

interface IPropTypes extends ComponentPropsWithRef<'div'> {
  initialText?: string;
  textKey: string;
  placeholder?: string;
  view?: 'onelined' | 'multilined';
  direction?: 'row' | 'column';
}

export function TextEditInput(props: IPropTypes) {
  const fetcher = new Fetcher();

  const {textKey, view = 'multilined', direction = 'column', placeholder = '', initialText = ''} = props;

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
    <article
      className={cn('flex items-center gap-2 w-full relative', {
        ['flex-col']: direction === 'column',
        ['flex-row']: direction === 'row'
      })}
    >
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
        {'Save'}
      </Button>
    </article>
  );
}
