import RegularExpression from "./RegularExpression";

export default class LiteralExpression extends RegularExpression {
  literal: string;

  constructor(literal: string) {
    super();
    this.literal = literal;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }
}
