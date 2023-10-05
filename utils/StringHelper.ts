export class StringHelper {
  public toSentenceCase(string: string): string {
    return `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`;
  }
}
