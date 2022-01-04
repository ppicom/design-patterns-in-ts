import RegularExpression from "./RegularExpression";

export default class AlternationExpression extends RegularExpression {
  alternative1: RegularExpression;
  alternative2: RegularExpression;

  constructor(a1: RegularExpression, a2: RegularExpression) {
    super();
    this.alternative1 = a1;
    this.alternative2 = a2;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }
}
