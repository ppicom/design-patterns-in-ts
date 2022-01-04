import RegularExpression from "./RegularExpression";

export default class SequenceExpression extends RegularExpression {
  expression1: RegularExpression;
  expression2: RegularExpression;

  constructor(e1: RegularExpression, e2: RegularExpression) {
    super();
    this.expression1 = e1;
    this.expression2 = e2;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }
}
