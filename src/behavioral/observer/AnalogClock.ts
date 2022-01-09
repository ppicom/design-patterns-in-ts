import ClockTimer from "./ClockTimer";
import Observer from "./Observer";
import Subject from "./Subject";

export default class AnalogClock extends Observer {
  private _subject: ClockTimer

  constructor(timer: ClockTimer) {
    super()
    this._subject = timer
  }

  update(subject: Subject): void {
    if (this._subject === subject) {
      this.draw()
    }
  }

  draw() { }
}