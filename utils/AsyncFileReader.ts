export class AsyncFileReader {
  public async readFiles(files: File[]): Promise<(string | ArrayBuffer)[]> {
    const readFilePromises = files.map((file) => this.readFile(file));

    return Promise.all(readFilePromises);
  }

  public async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => resolve(event.target?.result ?? '');
      reader.onerror = () => reject('Can not read the file');

      
      reader.readAsDataURL(file);
    });
  }
}
