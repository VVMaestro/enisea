export class Fetcher {
  public async get(url: string) {
    try {
      const response = await fetch(url, {method: 'GET'});

      if (!response.ok) {
        console.error(`Failed to get data with status: ${response.status}. ${response.statusText}`);

        return;
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  public async post(url: string, body: Record<string, unknown>) {
    try {
      const response = await fetch(url, {method: 'POST', body: JSON.stringify(body)});

      if (!response.ok) {
        console.error(`Failed to post data with status: ${response.status}. ${response.statusText}`);

        return;
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  public async delete(url: string) {
    try {
      const response = await fetch(url, {method: 'DELETE'});

      if (!response.ok) {
        console.error(`Failed to delete data with status: ${response.status}. ${response.statusText}`);

        return;
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
