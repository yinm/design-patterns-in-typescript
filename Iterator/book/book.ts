export class Book {
  private _name: String

  constructor(name: String) {
    this._name = name
  }

  get name() {
    return this._name
  }
}
