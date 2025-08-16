# GreatFrontEnd 75: Most important 75 questions for front end interviews.

This repository is composed of my answers for questions from the website
[GreatFrontEnd75](https://www.greatfrontend.com/pt-BR/interviews/gfe75).
I am constantly developing my skills, therefore, every question is a representative of my knowledge at the time and the chances are I already improved a lot at the moment you are reading this :smile:.
</br>
# Summary
1. [What's the difference between `block`, `inline`, and `inline-block`?](#1.-What's-the-difference-between-`block`,-`inline`,-and-`inline-block`)

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