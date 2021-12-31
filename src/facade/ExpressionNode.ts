import { CodeGenerator } from "./CodeGenerator";
import { ProgramNode } from "./ProgramNode";

export class ExpressionNode extends ProgramNode {
  traverse(generator: CodeGenerator): void {}
}
