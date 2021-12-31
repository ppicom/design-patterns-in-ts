import { Maze } from "./maze/Maze";
import { Door } from "./maze/sites/Door";
import { Room } from "./maze/sites/Room";
import { Wall } from "./maze/sites/Wall";
import { MazeFactory } from "./MazeFactory";

export class MazePrototypeFactory implements MazeFactory {
  private _maze: Maze;
  private _wall: Wall;
  private _room: Room;
  private _door: Door;

  constructor(maze: Maze, wall: Wall, room: Room, door: Door) {
    this._maze = maze;
    this._wall = wall;
    this._room = room;
    this._door = door;
  }

  makeMaze(): Maze {
    const maze = this._maze.clone();
    return maze;
  }

  makeWall(): Wall {
    return this._wall.clone();
  }

  makeRoom(n: number): Room {
    const clone = this._room.clone();
    clone.initialize(n);
    return clone;
  }

  makeDoor(r1: Room, r2: Room): Door {
    const clone = this._door.clone();
    this._door.initialize(r1, r2);
    return clone;
  }
}
