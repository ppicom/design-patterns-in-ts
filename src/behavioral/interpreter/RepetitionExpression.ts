import RegularExpression from "./RegularExpression";

export default class RepetitionExpression extends RegularExpression {
  repetition: RegularExpression;

  constructor(repetition: RegularExpression) {
    super();
    this.repetition = repetition;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }
}
