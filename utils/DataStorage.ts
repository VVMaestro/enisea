import {kv} from '@vercel/kv';

export class DataStorage {
  public async set(key: string, value: string, options?: Record<string, string | number | boolean>) {
    try {
      await kv.set(key, value, options);
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

  public async hashSet(key: string, field: string, value: string) {
    try {
      await kv.hset(key, {[field]: value});
    } catch (error) {
      console.error(error);
    }
  }

  public async hashGet(key: string, field: string) {
    try {
      return kv.hget(key, field);
    } catch (error) {
      console.error(error);
    }
  }
}
