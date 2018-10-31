class Test {
  constructor(arg) {
    this._state = { key: arg }
  }

  get state() {
    return this._state
  }

  set state(arg) {
    this._state.key = arg
  }
}

class ExtendsTest extends Test {
  _state = { key: 'hey' }
}

class ConstructorTest extends Test {
  constructor(arg) {
    super(arg)
  }
}

let extendy = new ExtendsTest()

let constructy = new ConstructorTest('hey')

console.log(extendy)
console.log(constructy)
