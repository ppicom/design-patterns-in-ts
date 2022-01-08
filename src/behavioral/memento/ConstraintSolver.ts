import ConstraintSolverMemento from "./ConstraintSolverMemento";
import Graphic from "./Graphic";

export default class ConstraintSolver {
  private static _instance: ConstraintSolver;

  static instance(): ConstraintSolver {
    if (!this._instance) {
      this._instance = new ConstraintSolver()
    }

    return this._instance
  }

  solve(): void {
    // solve the constraints of the current state
  }

  addConstraint(startConnection: Graphic, endConnection: Graphic): void { }
  removeConstraint(startConnection: Graphic, endConnection: Graphic): void { }

  createMemento(): ConstraintSolverMemento {
    return new ConstraintSolverMemento()
  }

  setMemento(state: ConstraintSolverMemento): void { }

  // nontrivial state and operations for enforcing
  // connectivity semantics.
}