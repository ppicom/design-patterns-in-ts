import { Maze } from "../maze/Maze";
import { Direction } from "../maze/sites/Direction";
import { Door } from "../maze/sites/Door";
import { Room } from "../maze/sites/Room";
import { MazeBuilder } from "./MazeBuilder";

export class StandardMazeBuilder extends MazeBuilder {
  private _maze: Maze;

  constructor() {
    super();
    this._maze = new Maze();
  }

  buildMaze(): void {
    this._maze = new Maze();
  }

  buildRoom(n: number): void {
    if (this._maze && !this._maze.getRoomByNumber(n)) {
      this._maze.addRoom(new Room(n));
    }
  }

  buildDoor(roomFrom: number, roomTo: number): void {
    const room1 = this._maze?.getRoomByNumber(roomFrom),
      room2 = this._maze?.getRoomByNumber(roomTo);

    if (room1 && room2) {
      const door = new Door(room1, room2);

      room1.setSide(this.commonWall(room1, room2), door);
      room2.setSide(this.commonWall(room2, room1), door);
    }
  }

  getMaze(): Maze {
    return this._maze;
  }

  private commonWall(r1: Room, r2: Room): Direction {
    if (r1.getNumber() < r2.getNumber()) return Direction.EAST;
    else return Direction.WEST;
  }
}
