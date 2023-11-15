import {Join} from '../shared/Join';
import {SocialLinkEditor} from './SocialLinkEditor';
import {InstagramIcon} from '../icons/InstagramIcon';
import {DATA_KEY} from '../../consts';
import {FacebookIcon} from '../icons/FacebookIcon';
import {TikTokIcon} from '../icons/TikTokIcon';

export const SocialButtonsEditor = () => {
  return (
    <Join
      design={'vertical'}
      items={[
        <SocialLinkEditor
          key={1}
          icon={<InstagramIcon width={64} height={64} />}
          dataKey={DATA_KEY.INST_LINK}
        />,
        <SocialLinkEditor
          key={1}
          icon={<FacebookIcon width={64} height={64} />}
          dataKey={DATA_KEY.FACEBOOK_LINK}
        />,
        <SocialLinkEditor
          key={1}
          icon={<TikTokIcon width={64} height={64} />}
          dataKey={DATA_KEY.TIK_TOK_LINK}
        />
      ]}
    />
  );
};
