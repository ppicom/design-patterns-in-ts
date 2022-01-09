import TCPConnection from "./TCPConnection";

export default abstract class TCPState {
  static changeState(connection: TCPConnection, state: TCPState) {
    connection.changeState(state)
  }

  activeOpen(connection: TCPConnection): void { }
  passiveOpen(connection: TCPConnection): void { }
  close(connection: TCPConnection): void { }
  send(connection: TCPConnection): void { }
  acknowledge(connection: TCPConnection): void { }
  synchronize(connection: TCPConnection): void { }
}
