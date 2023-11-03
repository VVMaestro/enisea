import {JsonStorageResponse} from './JsonStorageResponse';

export interface ITimeBasedOffer {
  index: number;
  photoURL: string;
  cost: string;
  time: string;
  mediaId: string;
  offerId: string;
}

export type TimeBasedOfferDataResponse = JsonStorageResponse<ITimeBasedOffer>;
