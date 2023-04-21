export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    // if (!Number.isInteger(val)) throw new TypeError("length must be a number");
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    // if (typeof val !== "string") throw new TypeError("name must be a string");
    this._name = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
