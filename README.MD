# GreatFrontEnd 75: Most important 75 questions for front end interviews.

This repository is composed of my answers for questions from the website
[GreatFrontEnd75](https://www.greatfrontend.com/pt-BR/interviews/gfe75).
I am constantly developing my skills, therefore, every question is a representative of my knowledge at the time and the chances are I already improved a lot at the moment you are reading this :smile:.
</br>

# Summary
1. [What's the difference between `block`, `inline`, and `inline-block`?](#1.-What's-the-difference-between-`block`,-`inline`,-and-`inline-block`)
2. [What's the difference between a javascript variable that is `null`, `undefined` or undeclared. How would you go about checking for any of these states?](#2-whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states)
3. [Implement your own `function.prototype.call()` method without calling the native `call` method. To avoid overwriting the actual `function.prototype.call`, implement the function as `function.prototype.myCall`.](#3-implement-your-own-functionprototypecall-method-without-calling-the-native-call-method-to-avoid-overwriting-the-actual-functionprototypecall-implement-the-function-as-functionprototypemycall)

# Questions
## 1. What's the difference between `block`, `inline`, and `inline-block`?
<b>Date: 14/08/2025</b></br>
<b>My original answer:</b></br>
Those are possible values of the display property.</br>
`Block:` element follows the normal flow of the page, therefore, the next element will be stacked bellow. Tags with <b>display: block</b> property will obey width and height properties.</br>
`Inline:` elements will be displayed in the same line in the page, side by side. It does not obey <b>width</b> and <b>height</b> definitions. The size of the element is determined by its content.</br>
`Inline-block:` elements will be positioned on the page the same as those with display: inline, but inline-block allows the explicit definition of width and height.
</br>
<b>Complementing after reading the solution:</b>
<table>
    <tr>
        <th>Trait</th>
        <th>Block</th>
        <th>Inline-block</th>
        <th>Inline</th>
    </tr>
    <tr>
        <td>
            Can be aligned with vertical-align
        </td>
        <td>
            No
        </td>
        <td>
            Yes
        </td>
        <td>
            Yes
        </td>
    </tr>
    <tr>
        <td>
            Margins and paddings
        </td>
        <td>
            All sides respected
        </td>
        <td>
            All sides respected
        </td>
        <td>
            Only horizontal sides respected. Vertical sides, if specified, do not affect layout. Vertical space it takes up depends on line-height, even though the border and padding appear visually around the content.
        </td>
    </tr>
    <tr>
        <td>
            Float
        </td>
        <td>
            -
        </td>
        <td>
            -
        </td>
        <td>
            Becomes like a block element, where you can set vertical margins and paddings.
        </td>
    </tr>
    <tr>
        <td>
            Use cases
        </td>
        <td>
            Layout elements like < div>, < p>, < section>
        </td>
        <td>
            Used for buttons, imagens and form fields that need custom sizes but stay in line with text
        </td>
        <td>
            Links < a>, text formatting < span>
        </td>
    </tr>
</table>

[Practicing/testing question concepts](./q1/)
</br>
[Question source](https://www.greatfrontend.com/interviews/study/gfe75/questions/quiz/whats-the-difference-between-inline-and-inline-block)
</br>
[Go to Summary](#summary)

## 2. What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?
<b>Date: 14/08/2025</b></br>
<b>My original answer:</b></br>
A Javascript variable that is null was declared and assigned the value null. Undefined is reserved for variables that were declared but not assigned yet (no value was given to it). If you try to use a variable that is undeclared, Javascript will throw a ReferenceError in strict mode, because it is needed to declare the variable using one of the declaration reserved words: var, let or const.
</br>
<b>Complementing after reading the solution:</b>
<table>
    <tr>
        <th>
            Trait
        </th>
        <th>
            Null
        </th>
        <th>
            Undefined
        </th>
        <th>
            Undeclared
        </th>
    </tr>
    <tr>
        <td>
            Type (via typeof operator)
        </td>
        <td>
            'object'
        </td>
        <td>
            'undefined'
        </td>
        <td>
            'undefined'
        </td>
    </tr>
    <tr>
        <td>
            Equality comparison
        </td>
        <td>
            null === 'undefined' is true
        </td>
        <td>
            'undefined' == null is true
        </td>
        <td>
            Throws a ReferenceError
        </td>
    </tr>
</table>

<b>Undeclared:</b></br>
Undeclared variables will be defined globaly, outside of the current scope. In strict mode, a `ReferenceError` will be thrown if you try to assign a value to an undeclared variable. Undeclared variables are as bad as global variables. Avoid them at all costs!
Using the strict comparison operator in undeclared variables will return 'undefined'
</br>
<b>Undefined:</b></br>
Check with typeof operator will return 'undefined' string. You can also compare with strict equality operator (===). If you compare with loose equality operator (==), it will also return true if the value is `null`, a deceiving behavior.
</br>
<b>Null:</b></br>
You can compare with the reserved word `null`. If you use the typeof operator, expect to get the string 'object'. Do not use the loose equality operator to compare with 'undefined' since it will wrongfuly return true.

[Practicing/testing question concepts](./q2/)
</br>
[Question source](https://www.greatfrontend.com/interviews/study/gfe75/questions/quiz/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states)
</br>
[Go to Summary](#summary)

## 3. Implement your own `function.prototype.call()` method without calling the native `call` method. To avoid overwriting the actual `function.prototype.call`, implement the function as `function.prototype.myCall`.
<b>Date: 17/08/2025</b></br>
<b>Concepts needed:</b></br>
1. <b>Prototypes:</b> Are the mechanism by wich JavaScript objects inherit features from one another.
</br>
Every object in JavaScript has a built-in property, wich is called its `prototype`. The prototype is itself an object, so the prototype will have its own prototype, making what's called a `prototype chain`. The chain ends when we reach a prototype that has `null` for its own prototype.
</br>
You can usually access the prototype of an object with `Object.getPrototypeOf(myObject)`. In some cases, the prototype of an object is not `Object.prototype`.
    ```
    // JavaScript
    const myDate = new Date();
    let object = myDate();
    do {
        object = Object.getPrototypeOf(object);
        console.log(object);
    } while (object);
    // Date.prototype
    // Object {}
    // null
    ```
2. <b>Shadowing:</b> When you define a method that already exists, you overwrite it. It happens because of the prototype chain. Since the browser found the method in the latest prototype, it will not got down the chain to look for.
3. <b>Setting prototypes:</b> The `Object.create()` method creates an object and allows you to specify an object that will be used as the new object's prototype.
    ```
    const personPrototype = {
        greet() {
            console.log('hello!');
        }
    }

    const carl = Object.create(personPrototype);
    carl.greet(); // hello!
    ```

    Another option is to use a constructor function and assign it to the object prototype, so we ensure that all objects created using this constructor will have the designated prototype.
    ```
    const personPrototype = {
        greet() {
            console.log(`hello, my name is ${this.name}!`);
        },
    };

    function Person(name) {
        this.name = name;
    }

    Object.assign(Person.prototype, personPrototype);
    ```
    `Object.assing(target, source)` is a function that allows you to insert properties of the source object into the target. Be careful, since properties with the same key will be overwritten. Also, keep in mind that it copies only values (arguments passed by value), so if one value is actually a reference to an object, the reference will be passed, not the object.</br>
    [Read the docs of Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
4. <b>Symbol:</b> Is a primitive type that is guaranteed to be unique. Can be used, for example, to assign property values to objects and ensure you will not overwrite an existing property.

[Practicing/testing question concepts](./q3/)
</br>
[Question source](https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/function-call)
</br>
[Go to Summary](#summary)

## 4. Implement `Array.prototype.reduce`. To avoid overwriting the actual `Array.prototype.reduce` which is being used by the autograder, we shall instead implement it as `Array.prototype.myReduce`.
<b>Date: 19/08/2025</b></br>
<b>Concepts needed:</b></br>
1. <b>Array.prototype.reduce:</b> definition is needed to code all the nuances of the function. See documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
2. Loops
3. Conditionals
4. Prototype chain

[Practicing/testing question concepts](./q4/)
</br>
[Question source](https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/array-reduce)
</br>
[Go to Summary](#summary)