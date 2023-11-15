import {ServerSideFetcher} from '../../utils/ServerSideFetcher';
import {Languages} from '../../types/PropTypes';

interface IPropTypes {
  tag: string;
  lang: Languages;
}

export async function ServerText({tag, lang}: IPropTypes) {
  const textResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${tag}_${lang}`);

   return textResponse?.text ?? '';
}
