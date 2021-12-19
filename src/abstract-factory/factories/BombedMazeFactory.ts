import { Maze } from "../../maze/Maze";
import { BombedWall } from "../../maze/sites/BombedWall";
import { Door } from "../../maze/sites/Door";
import { Room } from "../../maze/sites/Room";
import { RoomWithABomb } from "../../maze/sites/RoomWithABomb";
import { Wall } from "../../maze/sites/Wall";
import { MazeFactory } from "./MazeFactory";

export class BombedMazeFactory implements MazeFactory {
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new BombedWall();
  }

  makeRoom(n: number): Room {
    return new RoomWithABomb(n);
  }

  makeDoor(r1: Room, r2: Room): Door {
    return new Door(r2, r2);
  }
}
