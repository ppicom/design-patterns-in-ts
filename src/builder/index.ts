import { Maze } from "../maze/Maze";
import { CountingMazeBuilder } from "./builders/CountingMazeBuilder";
import { StandardMazeBuilder } from "./builders/StandardMazeBuilder";
import { MazeGame } from "./MazeGame";

(function () {
  let maze: Maze;
  let game = new MazeGame();
  const builder = new StandardMazeBuilder();
  const countingBuilder = new CountingMazeBuilder();

  MazeGame.createMaze(builder);
  MazeGame.createMaze(countingBuilder);
  maze = builder.getMaze();
})();
