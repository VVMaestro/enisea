import React from 'react';
import {ServerSideFetcher} from '../../utils/ServerSideFetcher';
import {TextEditInput} from './TextEditInput';
import {Languages} from '../../types/PropTypes';

interface IPropTypes {
  textTag: string;
  lang: Languages;
  placeholder?: string;
  inputType?: 'text' | 'textarea';
}

export async function TextEditor({lang, textTag, placeholder = '', inputType = 'textarea'}: IPropTypes) {
  const textKey = `${textTag}_${lang}`;

  const textResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${textKey}`);

  const initialText = textResponse?.text ?? '';

  return (
    <TextEditInput
      placeholder={placeholder}
      initialText={initialText}
      textKey={textKey}
      view={inputType === 'textarea' ? 'multilined' : 'onelined'}
    />
  );
}
