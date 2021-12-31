import { Maze } from "../maze/Maze";

export abstract class MazeBuilder {
  abstract buildMaze(): void;
  abstract buildRoom(n: number): void;
  abstract buildDoor(roomFrom: number, roomTo: number): void;
  abstract getMaze(): Maze;
}
