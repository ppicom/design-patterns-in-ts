import { CodeGenerator } from "./CodeGenerator";
import { ExpressionNode } from "./ExpressionNode";
import { StatementNode } from "./StatementNode";

export class RISCCodeGenerator extends CodeGenerator {
  constructor(bytestreamCode: Buffer) {
    super();
  }

  visitExpression(node: ExpressionNode): void {}
  visitStatement(node: StatementNode): void {}
}
