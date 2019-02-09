class ONum extends Number {}
let onum = new O()

function c<T>(o: new() => T): void {}
function t(o: typeof O): void {}
function f(o: Number): void {}

c(Number)
t(ONum)
f(onum)
