import React from 'react';
import {PhotoUploader} from '../../components/shared/PhotoUploader';
import {TextEditor} from '../../components/Editor/TextEditor';
import {DATA_KEY, PHOTO_TAG} from '../consts';

export default function Page() {
  return (
    <main>
      <TextEditor inputType={'text'} placeholder={'Special Offer title in english'} textTag={DATA_KEY.SPECIAL_OFFER_TITLE} lang={'en'} />
      <TextEditor placeholder={'Special Offer text in english'} textTag={DATA_KEY.SPECIAL_OFFER} lang={'en'} />
      <TextEditor inputType={'text'} placeholder={'Special Offer title in czeck'} textTag={DATA_KEY.SPECIAL_OFFER_TITLE} lang={'cz'} />
      <TextEditor placeholder={'Special Offer text in czeck'} textTag={DATA_KEY.SPECIAL_OFFER} lang={'cz'} />
      <PhotoUploader photoCategory={PHOTO_TAG.STAFF_PHOTO} />
      <TextEditor placeholder={'Staff text in english'} textTag={DATA_KEY.STAFF_TEXT} lang={'en'} />
      <TextEditor placeholder={'Staff text in czeck'} textTag={DATA_KEY.STAFF_TEXT} lang={'cz'} />
    </main>
  );
}
