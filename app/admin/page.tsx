import React from 'react';
import {PhotoUploader} from '../../components/shared/PhotoUploader';
import {TextEditor} from '../../components/Editor/TextEditor';
import {DATA_KEY, LANGUAGE, PHOTO_TAG} from '../../consts';
import {AdminCard} from '../../components/shared/AdminCard';
import {BrowserWindow} from '../../components/shared/BrowserWindow';
import {WhoPhotoList} from '../../components/WhoPhotoList';
import {WhoEditPhotoList} from '../../components/WhoEditPhotoList';
import {AdvantagesEditor} from '../../components/Editor/AdvantagesEditor';
import {ProgramsEditor} from '../../components/Editor/ProgramsEditor';
import {TimeBasedOffersEditor} from '../../components/Editor/TimeBasedOffersEditor';
import {SignUpLinkEditor} from '../../components/Editor/SignUpLinkEditor';
import {SocialButtonsEditor} from '../../components/Editor/SocialButtonsEditor';
import {Join} from '../../components/shared/Join';
import {CompanyInfoEditor} from '../../components/Editor/CompanyInfoEditor';
import {HomeVisitEditor} from '../../components/Editor/HomeVisitEditor';
import {AddressEditor} from '../../components/Editor/AddressEditor';
import {SpecialOfferPhoto} from '../../components/Editor/SpecialOfferPhoto';

export default function Page() {
  return (
    <main className='flex flex-col items-center gap-6'>
      <BrowserWindow toolbar={'Links'}>
        <AdminCard title={'Sign up link'}>
          <SignUpLinkEditor />
        </AdminCard>

        <AdminCard title={'Phone number'}>
          <TextEditor
            inputType={'text'}
            placeholder={'+79239438123'}
            textTag={DATA_KEY.PHONE_NUMBER}
            lang={LANGUAGE.EN}
          />
        </AdminCard>
      </BrowserWindow>

      <BrowserWindow toolbar={'Special Offer'}>
        <div className='flex flex-col gap-2'>
          <AdminCard title={'Title in english'}>
            <TextEditor
              inputType={'text'}
              placeholder={'Title in english'}
              textTag={DATA_KEY.SPECIAL_OFFER_TITLE}
              lang={LANGUAGE.EN}
            />
          </AdminCard>

          <AdminCard title={'Text in english'}>
            <TextEditor
              placeholder={'Special Offer text in english'}
              textTag={DATA_KEY.SPECIAL_OFFER}
              lang={LANGUAGE.EN}
            />
          </AdminCard>
        </div>

        <div className='flex flex-col gap-2'>
          <AdminCard title={'Title in czeck'}>
            <TextEditor
              inputType={'text'}
              placeholder={'Special Offer title in czeck'}
              textTag={DATA_KEY.SPECIAL_OFFER_TITLE}
              lang={LANGUAGE.CZ}
            />
          </AdminCard>

          <AdminCard title={'Text in czeck'}>
            <TextEditor
              placeholder={'Special Offer text in czeck'}
              textTag={DATA_KEY.SPECIAL_OFFER}
              lang={LANGUAGE.CZ}
            />
          </AdminCard>
        </div>
      </BrowserWindow>

      <BrowserWindow toolbar={'Special offer photo'}>
        <SpecialOfferPhoto />
      </BrowserWindow>

      <BrowserWindow toolbar={'Who we are'}>
        <AdminCard title={'Text in english'}>
          <TextEditor
            placeholder={'Who we are text in english'}
            textTag={DATA_KEY.STAFF_TEXT}
            lang={LANGUAGE.EN}
          />
        </AdminCard>

        <AdminCard title={'Text in czeck'}>
          <TextEditor
            placeholder={'Who we are text in czeck'}
            textTag={DATA_KEY.STAFF_TEXT}
            lang={LANGUAGE.CZ}
          />
        </AdminCard>
      </BrowserWindow>

      <BrowserWindow>
        <WhoEditPhotoList />
      </BrowserWindow>

      <BrowserWindow toolbar={'Advantages'}>
        <AdminCard title={'Text in english'}>
          <TextEditor
            placeholder={'Advantages text in english'}
            textTag={DATA_KEY.ADVANTAGES}
            lang={LANGUAGE.EN}
          />
        </AdminCard>

        <AdminCard title={'Text in czeck'}>
          <TextEditor
            placeholder={'Advantages text in czeck'}
            textTag={DATA_KEY.ADVANTAGES}
            lang={LANGUAGE.CZ}
          />
        </AdminCard>
      </BrowserWindow>

      <BrowserWindow toolbar={'Advantages List'}>
        <AdvantagesEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Programs'}>
        <AdminCard title={'Text in english'}>
          <TextEditor
            placeholder={'Programs text in english'}
            textTag={DATA_KEY.PROGRAMS}
            lang={LANGUAGE.EN}
          />
        </AdminCard>

        <AdminCard title={'Text in czeck'}>
          <TextEditor
            placeholder={'Programs text in czeck'}
            textTag={DATA_KEY.PROGRAMS}
            lang={LANGUAGE.CZ}
          />
        </AdminCard>
      </BrowserWindow>

      <BrowserWindow toolbar={'Programs List'}>
        <ProgramsEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Time based offer'} >
        <AdminCard title={'Text in english'}>
          <TextEditor
            placeholder={'Programs text in english'}
            textTag={DATA_KEY.TIME_BASED_OFFER_TEXT}
            lang={LANGUAGE.EN}
          />
        </AdminCard>

        <AdminCard title={'Text in english'}>
          <TextEditor
            placeholder={'Programs text in czeck'}
            textTag={DATA_KEY.TIME_BASED_OFFER_TEXT}
            lang={LANGUAGE.CZ}
          />
        </AdminCard>
      </BrowserWindow>

      <BrowserWindow toolbar={'Offers List'}>
        <TimeBasedOffersEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Social buttons'}>
        <SocialButtonsEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Company information'}>
        <CompanyInfoEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Home visit'}>
        <HomeVisitEditor />
      </BrowserWindow>

      <BrowserWindow toolbar={'Address'}>
        <AddressEditor />
      </BrowserWindow>
    </main>
  );
}
