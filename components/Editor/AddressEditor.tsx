import {Join} from '../shared/Join';
import {TextEditor} from './TextEditor';
import {DATA_KEY, LANGUAGE} from '../../consts';
import {Divider} from '../shared/Divider';
import {AddressPhotoUploader} from './AddressPhotoUploader';

export const AddressEditor = () => {
  return (
    <section>
      <Join
        design={'horizontal'}
        items={[
          <TextEditor
            key={1}
            textTag={DATA_KEY.ADDRESS_TEXT}
            lang={LANGUAGE.EN}
            placeholder={'Address in english'}
            inputType={'text'}
          />,

          <TextEditor
            key={2}
            textTag={DATA_KEY.ADDRESS_TEXT}
            lang={LANGUAGE.CZ}
            placeholder={'Address in czeck'}
            inputType={'text'}
          />
        ]}
      />

      <Divider color={'sky'} />

      <AddressPhotoUploader />
    </section>
  );
};
