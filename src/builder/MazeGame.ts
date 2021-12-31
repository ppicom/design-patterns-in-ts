import { MazeBuilder } from "./builders/MazeBuilder";

export class MazeGame {
  static createMaze(builder: MazeBuilder) {
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(2);
    builder.buildDoor(1, 2);

    return builder.getMaze();
  }
}
