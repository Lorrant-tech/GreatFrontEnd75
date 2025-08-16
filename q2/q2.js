// Undeclared
function testUndeclared() {
    undeclaredVariable = 'undeclared';
}

testUndeclared();
console.log('Undeclared: tests');
console.log(undeclaredVariable); // prints the string 'undeclared'

// Tries to access the typeof x, an undeclared variable
const typeofUndeclared = typeof x;
console.log(typeofUndeclared); //undefined
//console.log(x === 'undefined'); // ReferenceError: x is not defined
//console.log(x == 'undefined'); // ReferenceError: x is not defined

// Undefined
console.log('Undefined: tests');
let undefinedVariable;
console.log(undefinedVariable); // 'undefined'

const typeofUndefined = typeof undefinedVariable; // 'undefined'
console.log(typeofUndefined === 'undefined'); // true
console.log(typeofUndefined == 'undefined'); // true
console.log(undefinedVariable === null); // false
console.log(undefinedVariable == null); // true -> deceiving!!

//Null
console.log('Null: tests');
const nullVariable = null;
console.log(nullVariable); // null
console.log(typeof nullVariable); // 'object'
console.log(nullVariable === null); // true
console.log(nullVariable == null) // true
console.log(nullVariable === 'undefined'); // false
console.log(nullVariable == undefined); // true
