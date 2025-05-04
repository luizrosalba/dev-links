```jsx title='Number to string'
// Don't
let num = 15;
let s = num.toString();
let n = Number(s);

// Do
let num = 15;
let s = num + ""; // number to string
let n = +s; /// string to number
```
