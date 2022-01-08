import ConstraintSolver from "./ConstraintSolver";
import ConstraintSolverMemento from "./ConstraintSolverMemento";
import Graphic from "./Graphic";
import Point from "./Point";

export default class MoveCommand {
  private _target: Graphic
  private _delta: Point
  private _state?: ConstraintSolverMemento

  constructor(target: Graphic, delta: Point) {
    this._delta = delta
    this._target = target
  }

  execute(): void {
    const solver = ConstraintSolver.instance()
    this._state = solver.createMemento()
    this._target.move(this._delta)
    solver.solve()
  }

  unexecute(): void {
    if (this._state) {
      const solver = ConstraintSolver.instance()
      this._target.move(-this._delta)
      solver.setMemento(this._state)
      solver.solve()
    }
  }
}