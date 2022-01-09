import TCPState from "./TCPState";

export default class TCPEstablished extends TCPState {
  private static _instance: TCPEstablished

  static instance(): TCPEstablished {
    if (!this._instance)
      this._instance = new TCPEstablished()

    return this._instance
  }

  // implement state specific operations.
}