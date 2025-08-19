// Adds the myApply function to the Function.prototype
Function.prototype.myApply = function (thisArg, argArray) {
    // If thisArg is null or undefined, assign the globalObject
    thisArg = thisArg ?? globalThis;

    // Creates a symbol to ensure the property name is unique and will not overwrite an existing property
    const fn = Symbol();
    thisArg[fn] = this;

    // Passes the array of arguments to the function inside thisArg object
    const result = thisArg[fn](...(argArray || []));

    // Delete the function to avoid reusing it by mistake
    delete thisArg[fn];
    return result;
}

const mary = {age: 21, grades: [9, 8, 7]};
const john = {age: 24, grades: [10, 9, 8, 7]};

function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}

function finalGrade(additionalPoints, lostPoints) {
    // Calculates the average of the grades and adds the additional points
    let sum = 0;
    this.grades.forEach(grade => {
        sum = sum + grade;
    });

    return sum / this.grades.length + additionalPoints - lostPoints;
}

console.log(multiplyAge.myApply(mary));
console.log(multiplyAge.myApply(john, [2]));

console.log(finalGrade.myApply(mary, [1, 0.25]));
console.log(finalGrade.myApply(john, [0.25, 0]));