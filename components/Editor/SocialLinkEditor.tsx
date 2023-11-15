import {TextEditInput} from './TextEditInput';
import {DATA_KEY} from '../../consts';
import {ComponentPropsWithRef, ReactNode} from 'react';
import {ServerSideFetcher} from '../../utils/ServerSideFetcher';

interface IProps extends ComponentPropsWithRef<'article'> {
  icon: ReactNode;
  dataKey: keyof typeof DATA_KEY;
}

export const SocialLinkEditor = async ({icon, dataKey}: IProps) => {
  const linkResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${dataKey}`);

  return (
    <article className={'flex gap-4'}>
      {icon}

      <TextEditInput
        initialText={linkResponse?.text ?? ''}
        textKey={dataKey}
        direction={'row'}
        view={'onelined'}
        placeholder={'Link URL'}
      />
    </article>
  );
};
