import {DATA_KEY} from '../consts';
import {ReactNode} from 'react';
import {InstagramIcon} from './icons/InstagramIcon';
import {FacebookIcon} from './icons/FacebookIcon';
import {TikTokIcon} from './icons/TikTokIcon';
import {TwitterIcon} from './icons/TwitterIcon';
import {YouTubeIcon} from './icons/YouTubeIcon';
import Link from 'next/link';
import {ServerSideFetcher} from '../utils/ServerSideFetcher';

type Social = 'inst' | 'facebook' | 'tikTok' | 'twitter' | 'youtube';

interface IProps {
  social: Social;
}

export const SocialButton = async ({social}: IProps) => {
  const linkResponse = await new ServerSideFetcher().get<{text: string;}>(`/api/text/${mapSocialToDataLink(social)}`);

  return (
    <Link href={linkResponse?.text ?? '#'} className={'group'}>
      {mapSocialToIcon(social)}
    </Link>
  );
};

const mapSocialToIcon = (social: Social) => {
  const map: Record<Social, ReactNode> = {
    'inst': <InstagramIcon />,
    'facebook': <FacebookIcon />,
    'tikTok': <TikTokIcon />,
    'twitter': <TwitterIcon />,
    'youtube': <YouTubeIcon />
  };

  return map[social];
};

const mapSocialToDataLink = (social: Social) => {
  const map: Record<Social, string> = {
    'inst': DATA_KEY.INST_LINK,
    'facebook': DATA_KEY.FACEBOOK_LINK,
    'tikTok': DATA_KEY.TIK_TOK_LINK,
    'twitter': '',
    'youtube': ''
  };
  return map[social];
};
