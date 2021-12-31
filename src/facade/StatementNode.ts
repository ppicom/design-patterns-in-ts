import { CodeGenerator } from "./CodeGenerator";
import { ProgramNode } from "./ProgramNode";

export class StatementNode extends ProgramNode {
  traverse(generator: CodeGenerator): void {}
}
