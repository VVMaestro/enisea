import {LANGUAGE} from '../consts';

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

export type AdvantageCreateData = Omit<IAdvantageData, 'id'>;

export type AdvantagesDataResponse = [Record<string, IAdvantageData>] | undefined | 'nil';
