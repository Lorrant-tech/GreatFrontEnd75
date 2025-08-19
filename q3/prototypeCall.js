
// Assing the showMessage function
function showMessage(message) {
    console.log(message, this.name)
}

// Creates an object
const obj = {
    name: "Lorrant",
    age: 24
};

// Implements the myCall function in the Function prototype. This makes it callable by every function
Function.prototype.myCall = function (thisArg, ...argArray) {
    thisArg = thisArg ?? globalThis;
    console.log(thisArg);
    console.log(this);

    const fn = Symbol();

    thisArg[fn] = this;

    const result = thisArg[fn](...argArray);

    delete thisArg[fn];
    return result;
}

showMessage.myCall(obj, "You did it ");

function ageMultiplier(multiplier) {
    const result = this.age * multiplier;
    console.log(result);
    return result;
}

ageMultiplier.myCall(obj, 2);
