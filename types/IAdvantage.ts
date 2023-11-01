import {LANGUAGE} from '../consts';
import {JsonStorageResponse} from './JsonStorageResponse';

export interface IAdvantage {
  title: string;
  desc: string;
}

export interface IAdvantageData {
  index: number;
  advantageId: string;
  [LANGUAGE.CZ]: IAdvantage;
  [LANGUAGE.EN]: IAdvantage;
}

export type AdvantageCreateData = Omit<IAdvantageData, 'advantageId'>;

export type AdvantagesDataResponse = JsonStorageResponse<IAdvantageData>;
