import Subject from "./Subject";

export default class ClockTimer extends Subject {

  getHour() { }
  getMinute() { }
  getSecond() { }

  tick() {
    // update internal time-keeping state
    this.notify()
  }
}