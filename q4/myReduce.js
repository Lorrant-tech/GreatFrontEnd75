Array.prototype.myReduce = function (callbackFn, initialValue) {
    // checks if the array is empty
    if (this.length === 0) {
        throw new ReferenceError("Reduce of empty array");
    }

    let accumulator = null;
    let i = null;
    // Array.prototype.reduce function specifications
    if (initialValue === undefined)  {
        accumulator = this[0];
        i = 1
    } else {
        accumulator = initialValue;
        i = 0
    }

    // accumulator saves the value of the operations of each iteration and is used to the next iteration
    for (i; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this)
    }

    return accumulator;
}

const add = (prev, next) => prev + next;

console.log([-4, 10].myReduce(add, 0)); // 6
console.log(['b', 'c', 'd'].myReduce(add, '')); // 'bcd'