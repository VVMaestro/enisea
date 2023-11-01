import {LANGUAGE} from '../consts';
import {JsonStorageResponse} from './JsonStorageResponse';

export interface IProgram {
  title: string;
  desc: string;
}

export interface ProgramCreateData {
  [LANGUAGE.CZ]: IProgram;
  [LANGUAGE.EN]: IProgram;
  iconURL: string;
}

export interface IProgramData {
  index: number;
  programId: string;
  iconURL: string;
  mediaId: string;
  [LANGUAGE.CZ]: IProgram;
  [LANGUAGE.EN]: IProgram;
}

export type ProgramsDataResponse = JsonStorageResponse<IProgramData>;
