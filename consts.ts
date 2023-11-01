import {Languages} from './types/PropTypes';

export const DATA_KEY = {
  STAFF_TEXT: 'staffText',
  SPECIAL_OFFER: 'specialOffer',
  SPECIAL_OFFER_TITLE: 'specialOfferTitle',
  ADVANTAGES: 'advantages',
  ADVANTAGES_DATA: 'advantagesData',
  PROGRAMS_DATA: 'programsData'
} as const;

export const PHOTO_TAG = {
  WHO_PHOTO: 'whoWeAre',
  PROGRAM_ICON: 'programIcon'
};

export const SESSION_COOKIE = 'session';

export const LANGUAGE = {
  EN: 'en',
  CZ: 'cz'
} as const;
