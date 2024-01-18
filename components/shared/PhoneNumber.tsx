import {LinkButton} from './Button/LinkButton';
import {ServerSideFetcher} from '../../utils/ServerSideFetcher';
import {DATA_KEY, LANGUAGE} from '../../consts';

export const PhoneNumber = async () => {
  const textResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${DATA_KEY.PHONE_NUMBER}_${LANGUAGE.EN}`);

  if (!textResponse?.text) {
    return null;
  }

  return (
    <LinkButton
      styleType={'ghost'}
      view={'outlined'}
      href={`tel:${textResponse?.text ?? ''}`}
    >
      {textResponse?.text}
    </LinkButton>
  );
};
