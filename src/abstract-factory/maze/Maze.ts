import { Room } from "./sites/Room";

export class Maze {
  private _rooms: Map<number, Room>;

  constructor() {
    this._rooms = new Map();
  }

  addRoom(room: Room) {
    this._rooms.set(room.getNumber(), room);
  }

  getRoomByNumber(n: number) {
    return this._rooms.get(n);
  }
}
