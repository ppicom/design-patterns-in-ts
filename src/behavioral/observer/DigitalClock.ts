import ClockTimer from "./ClockTimer";
import Observer from "./Observer";
import Subject from "./Subject";

export default class DigitalClock extends Observer {
  private _subject: ClockTimer

  constructor(timer: ClockTimer) {
    super()
    this._subject = timer
    this._subject.attach(this)
  }

  update(subject: Subject): void {
    if (subject === this._subject) {
      this.draw()
    }
  }

  draw(): void { }
}