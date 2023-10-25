import React from 'react';
import {PhotoUploader} from '../../components/shared/PhotoUploader';
import {TextEditor} from '../../components/Editor/TextEditor';
import {DATA_KEY, PHOTO_TAG} from '../../consts';
import {AdminCard} from '../../components/shared/AdminCard';
import {BrowserWindow} from '../../components/shared/BrowserWindow';
import {WhoPhotoList} from '../../components/WhoPhotoList';
import {WhoEditPhotoList} from '../../components/WhoEditPhotoList';
import {AdvantagesEditor} from '../../components/AdvantagesEditor';

export default function Page() {
  return (
    <main className='flex flex-col items-center gap-6'>
      <BrowserWindow toolbar={'Special Offer'}>
        <div className='flex flex-col gap-2'>
          <AdminCard title={'Title in english'}>
            <TextEditor
              inputType={'text'}
              placeholder={'Title in english'}
              textTag={DATA_KEY.SPECIAL_OFFER_TITLE}
              lang={'en'}
            />
          </AdminCard>
          <AdminCard title={'Text in english'}>
            <TextEditor
              placeholder={'Special Offer text in english'}
              textTag={DATA_KEY.SPECIAL_OFFER}
              lang={'en'}
            />
          </AdminCard>
        </div>
        <div className='flex flex-col gap-2'>
          <AdminCard title={'Title in czeck'}>
            <TextEditor
              inputType={'text'}
              placeholder={'Special Offer title in czeck'}
              textTag={DATA_KEY.SPECIAL_OFFER_TITLE}
              lang={'cz'}
            />
          </AdminCard>
          <AdminCard title={'Text in czeck'}>
            <TextEditor
              placeholder={'Special Offer text in czeck'}
              textTag={DATA_KEY.SPECIAL_OFFER}
              lang={'cz'}
            />
          </AdminCard>
        </div>
      </BrowserWindow>
      <BrowserWindow toolbar={'Who we are'}>
        <AdminCard title={'Text in english'}>
          <TextEditor placeholder={'Who we are text in english'} textTag={DATA_KEY.STAFF_TEXT} lang={'en'}/>
        </AdminCard>
        <AdminCard title={'Text in czeck'}>
          <TextEditor placeholder={'Who we are text in czeck'} textTag={DATA_KEY.STAFF_TEXT} lang={'cz'}/>
        </AdminCard>
      </BrowserWindow>
      <BrowserWindow>
        <WhoEditPhotoList />
      </BrowserWindow>
      <BrowserWindow toolbar={'Advantages'}>
        <AdminCard title={'Text in english'}>
          <TextEditor placeholder={'Advantages text in english'} textTag={DATA_KEY.ADVANTAGES} lang={'en'}/>
        </AdminCard>
        <AdminCard title={'Text in czeck'}>
          <TextEditor placeholder={'Advantages text in czeck'} textTag={DATA_KEY.ADVANTAGES} lang={'cz'}/>
        </AdminCard>
      </BrowserWindow>
      <BrowserWindow toolbar={'Advantages List'}>
        <AdvantagesEditor />
      </BrowserWindow>
    </main>
  );
}
