import { ProgramNode } from "./ProgramNode";

export class ProgramNodeBuilder {
  newVariable() {}
  newAssignment() {}
  newReturnStatement() {}
  newCondition() {}

  getRootNode(): ProgramNode {
    return new ProgramNode();
  }
  //...
}
