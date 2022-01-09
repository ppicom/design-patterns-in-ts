import Subject from "./Subject";

export default abstract class Observer {
  constructor() { }

  abstract update(subject: Subject): void

}