import TCPConnection from "./TCPConnection";
import TCPEstablished from "./TCPEstablished";
import TCPState from "./TCPState";

export default class TCPListen extends TCPState {
  private static _instance: TCPListen

  static instance(): TCPListen {
    if (!this._instance)
      this._instance = new TCPListen()

    return this._instance
  }

  send(connection: TCPConnection): void {
    // send SYN, ACK, etc.

    TCPState.changeState(connection, TCPEstablished.instance())
  }
}