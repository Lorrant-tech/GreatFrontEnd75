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