import TCPClosed from "./TCPClosed";
import TCPState from "./TCPState";

export default class TCPConnection {
  private _state: TCPState

  constructor() {
    this._state = TCPClosed.instance()
  }

  activeOpen(): void {
    this._state.activeOpen(this)
  }

  passiveOpen(): void {
    this._state.passiveOpen(this)
  }

  close(): void {
    this._state.close(this)
  }

  send(): void {
    this._state.send(this)
  }

  acknowledge(): void {
    this._state.acknowledge(this)
  }

  synchronize(): void {
    this._state.synchronize(this)
  }

  changeState(state: TCPState) {
    this._state = state
  }
}