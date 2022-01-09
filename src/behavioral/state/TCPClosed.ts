import TCPConnection from "./TCPConnection";
import TCPEstablished from "./TCPEstablished";
import TCPListen from "./TCPListen";
import TCPState from "./TCPState";

export default class TCPClosed extends TCPState {
  private static _instance: TCPClosed

  static instance(): TCPClosed {
    if (!this._instance) {
      this._instance = new TCPClosed()
    }
    return this._instance
  }

  activeOpen(connection: TCPConnection): void {
    // send SYN, ACK, etc..

    TCPState.changeState(connection, TCPEstablished.instance())
  }

  passiveOpen(connection: TCPConnection): void {
    TCPState.changeState(connection, TCPListen.instance())
  }

}
