import {TextEditInput} from './TextEditInput';
import {DATA_KEY} from '../../consts';
import {ServerSideFetcher} from '../../utils/ServerSideFetcher';

export const SignUpLinkEditor = async () => {
  const linkResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${DATA_KEY.SIGN_UP_LINK}`);

  return (
    <TextEditInput
      initialText={linkResponse?.text ?? ''}
      placeholder={'Sign up link'}
      textKey={DATA_KEY.SIGN_UP_LINK}
      view={'onelined'}
    />
  );
};
