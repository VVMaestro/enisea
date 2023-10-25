import {kv} from '@vercel/kv';

export class DataStorage {
  public async set(key: string, value: string, options?: Record<string, string | number | boolean>) {
    try {
      await kv.set(key, value, options);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async get(key: string): Promise<string | null> {
    try {
      return await kv.get(key);
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }

  public async hashSet(key: string, record: Record<string, string>) {
    try {
      return await kv.hset(key, record);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async hashGet(key: string, field: string) {
    try {
      return kv.hget(key, field);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async listPush(key: string, elements: string[] | number[]) {
    try {
      return kv.lpush(key, ...elements);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async listRange(key: string, start: number, end: number) {
    try {
      return kv.lrange(key, start, end);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async setAdd(key: string, members: string[]) {
    try {
      return kv.sadd(key, ...members);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async setMembers(key: string) {
    try {
      return kv.smembers(key);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async setRemoveMembers(key: string, members: string[]) {
    try {
      return kv.srem(key, ...members);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async jsonSet(key: string, path: string, value: string | number | Record<string, unknown>) {
    try {
      return kv.json.set(key, path, value);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async jsonGet(key: string, path: string) {
    try {
      return kv.json.get(key, path);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public async jsonDelete(key: string, path?: string) {
    try {
      return kv.json.del(key, path)
    } catch (error: unknown) {
      console.error(error);
    }
  }
}
