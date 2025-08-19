Function.prototype.myBind = function(thisArg, ...argsArray) {
    thisArg = thisArg ?? globalThis;

    const fn = Symbol();
    thisArg[fn] = this;

    const result = thisArg[fn](...argsArray);
    // console.log(result);
    return result;
}

const obj = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = obj.getX;
//console.log(unboundGetX());
/* 
    The function gets invoked at the global scope, because it is merely a reference to the function. The reference to the object is not registered.
    Expected output: undefined
*/

const boundGetX = obj.getX.myBind(obj);
console.log(boundGetX);