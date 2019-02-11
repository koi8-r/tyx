/*
  a = {}
  a proto = A.prototype
  a = Foo.apply(a)
 */

// function have a prototype
let A = function() {
    // this === a object
    console.assert(this.x === 9, 'prototype "x" prop')

    this.z = 'Z'
    this.test = function() {
        return this.x
    }

    return this  // explicit return new object instance with:
                 // A === this.constructor from this.__proto__
                 // this.__proto__ = A.prototype
}

// A.prototype === { constructor: A }
// a.__proto__ prototype is A.prototype after new
A.prototype = Object.assign(A.prototype, {x: 9, constructor: A})  // saving constructor
let a = new A()

console.assert(a.x === 9 && a.test() === 9, 'Implicit')
console.assert(a.constructor.prototype.x === 9, 'Explicit')
console.assert(a.constructor === A)
console.assert(a.constructor.prototype.constructor === A)
console.assert(A.prototype.constructor === A)
console.assert(a instanceof A && a.__proto__ == A.prototype)
console.assert(a instanceof Object && a.__proto__.__proto__ == Object.prototype)
console.assert(new a.constructor() instanceof a.constructor)
