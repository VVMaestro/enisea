import {kv} from '@vercel/kv';

export class DataStorage {
  public async set(key: string, value: string) {
    try {
      await kv.set(key, value);
    } catch (error) {
      console.error(error);
    }
  }

  public async get(key: string): Promise<string | null> {
    try {
      return await kv.get(key);
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}
