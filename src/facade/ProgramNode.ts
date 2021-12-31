import { CodeGenerator } from "./CodeGenerator";

export class ProgramNode {
  getSourcePosition(line: number, index: number) {}

  add(node: ProgramNode) {}
  remove(node: ProgramNode) {}

  traverse(generator: CodeGenerator) {}
}
