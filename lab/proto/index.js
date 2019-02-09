/*
  a = {}
  a proto = A.prototype
  a = Foo.apply(a)
 */

let A = function() {
    // this === a
    this.test = function() {
        return this.x
    }
}

// a prototype is A.prototype
A.prototype = Object.assign(A.prototype, {x: 9})
let a = new A()

console.assert(a.test() === 9)
console.assert(A.prototype.constructor === A)
