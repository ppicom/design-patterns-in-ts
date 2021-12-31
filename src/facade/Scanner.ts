export class Scanner {
  private _istream: Buffer;

  constructor(inputStream: Buffer) {
    this._istream = inputStream;
  }

  scan(): string {
    throw new Error("Method not implemented");
  }
}
