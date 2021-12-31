import { Maze } from "../maze/Maze";
import { MazeBuilder } from "./MazeBuilder";

export class CountingMazeBuilder extends MazeBuilder {
  private _doors: number;
  private _rooms: number;

  constructor() {
    super();
    this._doors = 0;
    this._rooms = 0;
  }

  buildMaze(): void {}

  buildRoom(n: number): void {
    this._rooms++;
  }

  buildDoor(roomFrom: number, roomTo: number): void {
    this._doors++;
  }

  getMaze(): Maze {
    return {} as any; // Do nothing
  }

  getCounts(): { doors: number; rooms: number } {
    return {
      doors: this._doors,
      rooms: this._rooms,
    };
  }
}
