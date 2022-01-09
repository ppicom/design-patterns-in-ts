import Observer from "./Observer";

export default abstract class Subject {
  private _observers: Observer[]

  constructor() {
    this._observers = []
  }

  attach(observer: Observer) {
    this._observers.push(observer)
  }

  detach(observer: Observer) {
    const i = this._observers.indexOf(observer)

    if (i !== -1) {
      this._observers.splice(i, 1)
    }
  }

  notify() {
    this._observers.forEach(o => {
      o.update(this)
    })
  }
}