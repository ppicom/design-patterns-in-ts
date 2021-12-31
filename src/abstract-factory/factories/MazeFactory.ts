import { Maze } from "../maze/Maze";
import { Door } from "../maze/sites/Door";
import { Room } from "../maze/sites/Room";
import { Wall } from "../maze/sites/Wall";

/**
 * We could have made it concrete, and then use it as the base class
 * for the other concrete factories. But I prefer coding against abstractions
 * instead of implementations whenever possible.
 */
export interface MazeFactory {
  makeMaze(): Maze;
  makeWall(): Wall;
  makeRoom(n: number): Room;
  makeDoor(r1: Room, r2: Room): Door;
}
