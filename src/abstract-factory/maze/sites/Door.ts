import { MapSite } from "./MapSite";
import { Room } from "./Room";

export class Door implements MapSite {
  private _room1: Room;
  private _room2: Room;
  private _isOpen: boolean;

  constructor(room1: Room, room2: Room) {
    this._room1 = room1;
    this._room2 = room2;
    this._isOpen = false;
  }

  enter(): void {}

  otherSideFrom(room: Room): Room {
    if (!this._isOpen) throw new Error("Door is closed.");
    if (room.getNumber() === this._room1.getNumber()) return this._room2;
    if (room.getNumber() === this._room2.getNumber()) return this._room1;
    throw new Error("Invalid room.");
  }
}
