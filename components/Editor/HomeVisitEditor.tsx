import {Join} from '../shared/Join';
import {TextEditor} from './TextEditor';
import {DATA_KEY, LANGUAGE} from '../../consts';
import {HomeVisitPhotoUploader} from './HomeVisitPhotoUploader';
import {Divider} from '../shared/Divider';

export const HomeVisitEditor = () => {
  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <Join
        items={[
          <TextEditor
            key={1}
            textTag={DATA_KEY.HOME_VISIT_TITLE}
            lang={LANGUAGE.EN}
            inputType={'text'}
            placeholder={'English title'}
          />,

          <TextEditor
            key={2}
            textTag={DATA_KEY.HOME_VISIT_TITLE}
            lang={LANGUAGE.CZ}
            inputType={'text'}
            placeholder={'Czeck title'}
          />
        ]}
      />

      <Join
        items={[
          <TextEditor
            key={1}
            textTag={DATA_KEY.HOME_VISIT_TEXT}
            lang={LANGUAGE.EN}
            inputType={'textarea'}
            placeholder={'English text'}
          />,

          <TextEditor
            key={2}
            textTag={DATA_KEY.HOME_VISIT_TEXT}
            lang={LANGUAGE.CZ}
            inputType={'textarea'}
            placeholder={'Czeck text'}
          />
        ]}
      />

      <Divider color={'sky'} />

      <HomeVisitPhotoUploader />
    </div>
  );
};
