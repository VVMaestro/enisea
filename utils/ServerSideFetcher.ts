import {headers} from 'next/headers';
import {ReadonlyHeaders} from 'next/dist/server/web/spec-extension/adapters/headers';

export class ServerSideFetcher {
  private readonly headers: ReadonlyHeaders;

  constructor() {
    this.headers = headers();
  }

  public getFullHostPath(path: string): string {
    const host = this.headers.get('host');
    const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https';    

    return `${protocol}://${host}${path}`;
  }

  public async get<T>(url: string): Promise<T | undefined> {
    try {
      const response = await fetch(this.getFullHostPath(url), {method: 'GET'});
  
      if (!response.ok) {
        console.error(`Failed to fetch data with status: ${response.status}. ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}
