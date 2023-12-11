# Specificity

Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element.
[https://dev.to/taiwobello/css-specificity-3ik1](https://dev.to/taiwobello/css-specificity-3ik1)

![cheatSheet](https://res.cloudinary.com/dmo37c7zy/image/upload/v1672401586/specificity_lwgr7r.png)

## Specificity rankings

The specificity rankings of CSS rules are as follows, from the most specific to the least specific.

Inline styles - Example: h1 style="color: pink;"
ID selectors - Example: #navbar
Class selectors .myClass, attribute selectors [type="radio"] and pseudo-classes :hover
Element selectors div and pseudo-elements :before

## How to calculate specificity?

The following are the specificity value of a selector.

Inline styles have a specificity of 10000
Add 100 for each matching ID selector
Add 10 for each matching class selector, attribute selectors, and pseudo-classes.
Add 1 for each matching element selector and pseudo-elements

```
Example

#btn {
   background-color: red; /* 100 */
}

button.btn[type="button"] {
    background-color: green; /* 1 + 10 + 10 = 21*/
}

.btn {
    background-color: blue; /* 10 */
}
<div id="container">
   <button class="btn" id="btn" type="button">Button</button>
</div>

The first declaration has simply an ID selector with a specificity value of 100.
The second declaration includes an element selector with a value of 1, a class selector of 10, and an attribute selector of 10. 10 + 10 + 1 = 21
The third declaration is simply a class selector with a specificity value of 10.
```
