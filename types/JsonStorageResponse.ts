export type JsonStorageResponse<T extends object> =
  [Record<string, JsonStorageData<T>>] | undefined | 'nil';

export type JsonStorageData<T extends object> = {index: number} & T;
